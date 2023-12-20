import React from 'react'
import { useCartContext } from '../context/cart_context';
import CartItem from '../components/CartItem';
import { NavLink } from 'react-router-dom';
import '../components/css/cart.css'
import { CurrencyFormat } from '../components/product';


function Cart() {

    const { cart, clearCart, total_price, shipping_fee } = useCartContext();


    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col text-center">Item</div>
                    <div id='cart-hide' className="col text-center">Price</div>
                    <div id='amount-toggle-hide' className="col text-center">Quantity</div>
                    <div className="col text-center">Subtotal</div>
                    <div className="col text-center">Remove</div>
                </div>

                <hr />


                {
                    cart.map((element) => {
                        return <CartItem key={element.id} data={element} />
                    })
                }


                <hr />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NavLink to='/products'>
                        <div>
                            <button type='button' className='btn btn-primary'> Continue Shopping </button>
                        </div>
                    </NavLink>

                    <div>
                        <button type='button' className='btn btn-warning' onClick={clearCart}> Clear Cart </button>
                    </div>
                </div>

                <div className='m-4' style={{ display: 'flex', justifyContent: 'right' }}>
                    <div id='order-checkout'>
                        <div className='order-contents'>Total price    : <CurrencyFormat value={total_price} /> </div>
                        <div className='order-contents'>Shipping fees : <CurrencyFormat value={shipping_fee} /> per product </div>
                        <hr />
                        <div>Order price  : <CurrencyFormat value={total_price + shipping_fee} />  </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

//TODO:Improve logic of order checkout box and give better css styling

export default Cart;
