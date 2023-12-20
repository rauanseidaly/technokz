import React from 'react'
import { CurrencyFormat } from './product';
import { NavLink } from 'react-router-dom';
import './css/sort.css'

export default function ListView(props) {

    return (
        <div className='container'>
            <div className="row">
                {props.products.map((element) => {

                    const { id, name, image, price, description } = element;

                    return (

                        <div id='list_element' key={element.id} className='row'>
                            <div id='list_element1' className='col-6'>
                                
                                    <img style={{ width: '100%', height: '95%' }} src={image} alt={name} />
                                
                            </div>

                            <div id='list_element2' className='col-6'>
                                <h3>{name}</h3>

                                <p> <CurrencyFormat value={10 * price} />   </p>

                                <p> {description.slice(0, 90)}... </p>

                                <NavLink to={`/singleproduct/${id}`} >

                                    <button className="btn btn-primary m-4"> Read More </button>

                                </NavLink>

                            </div>
                        </div>

                    )
                })
                }
            </div>
        </div >
    );
}
