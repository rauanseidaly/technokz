import React from 'react'
import { useProductContext } from '../context/productContext'
import Product from './product';

export default function FeatureProducts() {
    const { isLoading, featureProducts } = useProductContext();


    if (isLoading) {
        return <h1 style={{ textAlign: "center" }}>Loading... please wait</h1>
    }

    return (
        <div>
            <div className='container'>
                <h1 style={{ textAlign: "center" }}>Our Feature Services</h1>
                <div className='row' >
                    {
                        featureProducts.map((element) => {
                            return <Product key={element.id} data={element} />


                        })


                    }

                </div>
            </div>

        </div>
    )
}
