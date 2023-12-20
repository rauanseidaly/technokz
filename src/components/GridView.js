
import React from 'react'
import Product from './product'

export default function GridView(props) {


    return (
                                                         
        <div className='container'>
            <div className='row'>
                {props.products.map((element) => {

                    return <Product data={element} key={element.id} />
                })

                }
            </div>
        </div>
    );
}
