import React from 'react'
import FilterSection from '../components/FilterSection';
import Sort from '../components/Sort';
import ProductList from '../components/ProductList';


function Products() {




    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col">
                        <FilterSection />
                    </div>

                    <div className="col-8">
                        <div className="row">

                            <div className="col-12">
                                <Sort />
                            </div>

                            <div className="col-12">
                                <ProductList />
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Products;
