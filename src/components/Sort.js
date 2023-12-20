import React from 'react';
import './css/sort.css';
import { BsGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';


export default function Sort() {

  const { filter_products, grid_view, setGridView, setListView, setSortingValue } = useFilterContext();

  return (
    <div className='container m-4'>
      <div className='sort-items'>
        <div>
          <button onClick={() => { setGridView() }} className={grid_view ? 'btn btn-primary' : 'btn'}><BsGridFill /></button>
          <button onClick={() => { setListView() }} className={grid_view ? 'btn' : 'btn btn-primary'}> <BsList /> </button>
        </div>

        <div>
          {filter_products.length}  products available
        </div>

        <div>
          <select onClick={setSortingValue} id='select_element'>
            <option className='option_element' >Sort Products</option>
            <option className='option_element' value='lowest'>Lowest (Price) </option>
            <option className='option_element' value='highest'>Highest (Price) </option>
            <option className='option_element' value='a-z'>a-z</option>
            <option className='option_element' value='z-a'>z-a</option>
          </select>

        </div>
      </div>
    </div>
  )
}
