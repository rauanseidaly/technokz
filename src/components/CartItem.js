import React, { useState } from 'react';
import './css/cart.css';
import './css/singleProduct.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiFillDelete } from "react-icons/ai";
import { CurrencyFormat } from './product';
import { useCartContext } from '../context/cart_context';



const CartAmountChange = (props) => {

    const { finalAmount, increaseFinalAmount, decreaseFinalAmount } = props.data;



    return (
        <div style={{ display: 'flex' }}>
            <button className='itemsToggle' onClick={() => { increaseFinalAmount() }}> <AiOutlinePlusCircle className='icons' /> </button> <div>{finalAmount} </div> <button className='itemsToggle' onClick={() => { decreaseFinalAmount() }}  > <AiOutlineMinusCircle className='icons' /> </button>
        </div>

    );

}

export default function CartItem(props) {

    const { deleteCartItem } = useCartContext();

    const { id, name, image, price, color, amount, max } = props.data;

    const [finalAmount, setFinalAmount] = useState(amount);

    const increaseFinalAmount = () => {

        finalAmount < max ? setFinalAmount(finalAmount + 1) : setFinalAmount(max);

    }

    const decreaseFinalAmount = () => {

        finalAmount > 1 ? setFinalAmount(finalAmount - 1) : setFinalAmount(1);
    }


    return (

        <div className='row mt-4'>

            <div id='cart-first-div' className="col">
                <div>
                    <img id='cart-hide' className='cart-img' src={image} alt={name} />
                </div>
                <div>
                    <p>{name}</p>
                    <div>color:  <div id='color' style={{ height: '1rem', width: '1rem', backgroundColor: color, borderRadius: '50%' }}></div></div>
                </div>
            </div>

            <div id='cart-hide' style={{ paddingTop: '3.5rem' }} className="col">
                <CurrencyFormat value={price} />
            </div>

            <div id='amount-toggle-hide' style={{ paddingTop: '2.5rem', textAlign: 'center' }} className="col">
                <CartAmountChange data={{ finalAmount, increaseFinalAmount, decreaseFinalAmount }} />
            </div>

            <div className="col align-self-center d-flex justify-content-center">
                <CurrencyFormat value={finalAmount * price} />
            </div>

            <div className="col align-self-center d-flex justify-content-center ">
                <button onClick={() => { deleteCartItem(id) }} id='cart-delete' type='button'> <AiFillDelete /> </button>
            </div>

        </div>


    );
}
