import { useContext } from "react";
import { createContext } from "react";
import { useProductContext } from "./productContext";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from '../Reducer/filter_reducer'

const FilterContext = createContext();

const initialState = {

    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_type: '',
    filters: {
        text: '',
        category: 'All',
        company: 'All',
        color: 'All',
        maxPrice: 0,
        price: 0,
        minPrice: 0
    }

}

const FilterContextProvider = (props) => {  //! whenever useFilterContext function is called in any component it automatically calls FilterContextProvider function

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);


    const setGridView = () => {

        return dispatch({ type: 'SET_GRID_VIEW' });
    }

    const setListView = () => {

        return dispatch({ type: 'SET_LIST_VIEW' });
    }

    const setSortingValue = (e) => {    //! to get value of sorting options eg- highest,lowest, a-z,z-a
        const elementValue = e.target.value;
        return dispatch({ type: 'SET_SORTING_VALUE', payload: elementValue });

    }

    const updateFilterValue = (e) => {  //! to get value written by user in search bar
        const name = e.target.name;
        const value = e.target.value;


        return dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } });

    }

    const clearFilters = () => {

        dispatch({ type: 'CLEAR_FILTERS' });
    }

    useEffect(() => {

        dispatch({ type: 'FILTER_PRODUCTS' });  //! for Search Bar and category, company filters

        dispatch({ type: 'SORTING_PRODUCTS' });  //! for sorting options eg- highest,lowest, a-z,z-a

    }, [state.sorting_type, state.filters]);


    useEffect(() => {

        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });   //! when products page is rendered for first time

    }, [products]);

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, setSortingValue, updateFilterValue, clearFilters }} > {props.children} </FilterContext.Provider>

}

const useFilterContext = () => {    //! whenever useFilterContext function is called in any component it automatically calls FilterContextProvider function

    return useContext(FilterContext);
}


export { FilterContextProvider, useFilterContext };