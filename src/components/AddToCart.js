import React from 'react';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import './css/singleProduct.css';
import { useCartContext } from '../context/cart_context';




const CartAmountToggle = (props) => {



    const { amount, setIncrease, setDecrease } = props.data;


    return (

        <div>
            <div>
                <button className='itemsToggle' onClick={() => { setIncrease() }}> <AiOutlinePlusCircle className='icons' /> </button> {amount} <button className='itemsToggle' onClick={() => { setDecrease() }}  > <AiOutlineMinusCircle className='icons' /> </button>
            </div>
        </div>
    );
}

export default function AddToCart(props) {

    const { addToCart } = useCartContext();


    const { id, colors, stock } = props.data;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);


    const setColorOfProduct = (selectedColor) => {

        setColor(selectedColor);
    }

    function setIncrease() {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);

    }

    function setDecrease() {

        amount > 1 ? setAmount(amount - 1) : setAmount(1);

    }




    return (
        <div>
            <div>
                {colors.map((curColor, index) => {

                    return <button onClick={() => { setColorOfProduct(curColor) }} key={index} className={color === curColor ? 'active_btn' : 'nonactive_btn'} style={{ backgroundColor: curColor }}>

                        {color === curColor ? <FaCheck style={{ color: 'white' }} /> : null}

                    </button>
                })
                }
            </div>
            <hr />

            <CartAmountToggle data={{ amount, setIncrease, setDecrease }} />

            <NavLink to="/cart" onClick={() => { addToCart(id, color, amount, props.data) }}>
                <button className='bt btn-primary addCart'>Add To Cart</button>
            </NavLink>
        </div>

    );
}
