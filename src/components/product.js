import React from 'react'
import './css/product.css'
import { NavLink } from 'react-router-dom';
import './css/sort.css'


export const CurrencyFormat = (props) => {

    let indPrice = new Intl.NumberFormat('en-KZ', {

        style: 'currency',
        currency: 'KZT',
        maximumSignificantDigits: 2

    });

    return indPrice.format(props.value / 100);
}


export default function Product(props) {

    const { id, name, image, price, category } = props.data;


    return (

        <div id='singleGridProduct' className="col-md-4" >
            <div><span style={{ fontWeight: "bolder" }}>category: </span><span className='bg-primary' style={{ padding: "2.5px 10px", border: "2px black", borderRadius: "1rem", color: "white" }}>{category}</span></div>

            <NavLink to={`/singleproduct/${id}`}><img title='click on image to see product details' style={{ maxWidth: "100%", height: "80%" }} src={image} alt='product' /> </NavLink>
            <div><span id='span1' className='bg-primary'>{name}</span> <span id='span2'> <span className='bg-primary' style={{ padding: "2.5px 10px", border: "2px black", borderRadius: "1rem", color: "white" }}> <CurrencyFormat value={price} /> </span></span> </div>


        </div>



    );
}


