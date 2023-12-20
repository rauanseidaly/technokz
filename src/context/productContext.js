import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/productReducer';

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    isSingleError: false,
    singleProduct: {}
}


const AppProvider = (props) => {    //! whenever useProductContext function is called in any component it automatically calls AppProvider function

    const [state, dispatch] = useReducer(reducer, initialState); // always use hooks inside functions.



    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });

        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }

    }

    const getSingleProduct = async (url) => {

        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        }
        catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }

    }

    useEffect(() => {
        getProducts(API);

    }, []);


    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{props.children}</AppContext.Provider>
}

const useProductContext = () => {  //! whenever useProductContext function is called in any component it automatically calls AppProvider function
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };
