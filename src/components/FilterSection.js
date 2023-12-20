import React from 'react'
import { useFilterContext } from '../context/filter_context'
import './css/singleProduct.css'
import { FaCheck } from "react-icons/fa";
import { CurrencyFormat } from "../components/product";



export default function FilterSection() {


  const { filters: { text, color, price, minPrice, maxPrice }, updateFilterValue, all_products, clearFilters } = useFilterContext();

  const getProducts = (data, property) => {

    var allItems = data.map((element) => {

      return element[property];

    });

    if (property === 'colors') {

      allItems = allItems.flat();   //! this is done to get all items of sub arrays into parent array.
    }

    var nonDuplicateItems = ['All', ...new Set(allItems)];  //! this is done to get non duplicate categories or companies

    return nonDuplicateItems;

  }


  const categories = getProducts(all_products, 'category');
  const companies = getProducts(all_products, 'company');
  var colors = getProducts(all_products, 'colors');



  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input id='input-type' placeholder='search' type='text' name='text' value={text} onChange={updateFilterValue} />
      </form>


      <div>
        <h3 className='sort-heading'>categories</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {
            categories.map((element, index) => {
              return <button id='categories' className='btn btn-primary mt-4 responsive' key={index} type='button' name='category' value={element} onClick={updateFilterValue}> {element}  </button>
            })
          }
        </div>
      </div>

      <div>
        <h3 className='sort-heading'>companies</h3>
        <select id='select-company' name='company' onClick={updateFilterValue} >
          {
            companies.map((element, index) => {

              return <option key={index} value={element} >{element}</option>
            })

          }
        </select>

      </div>

      <div>
        <h3 className='sort-heading'>colors</h3>
        <div>
          {
            colors.map((element, index) => {

              if (element === 'All') {

                return (
                  <button type='button' key={index} name='color' value={element} onClick={updateFilterValue} className={color === element ? 'active_btn' : 'nonactive_btn'} >
                    All
                  </button>);

              }
              else {

                return (<button type='button' key={index} name='color' value={element} style={{ backgroundColor: element }} onClick={updateFilterValue} className={color === element ? 'active_btn' : 'nonactive_btn'} >
                  {color === element ? <FaCheck style={{ color: 'white' }} /> : null}
                </button>);
              }
            })

          }

        </div>
      </div>

      <div>
        <h3 className='sort-heading'>
          price
        </h3>
        <p className='responsive'> <CurrencyFormat value={price} /> </p>
        <input id='input-range' type='range' name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />

        <button id='clear-filters' className='btn btn-outline-primary' onClick={clearFilters} >clear filters</button>

      </div>

    </div>
  )
}
