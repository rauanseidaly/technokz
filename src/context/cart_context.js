import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/cartReducer'

const CartContext = createContext();





const getLocalCartData = () => {  // final modifications
    let localCartData = localStorage.getItem('thapaCart');
    const parsedData = JSON.parse(localCartData);

    if (!Array.isArray(parsedData))
        return [];
    return parsedData;

}



const initialState = {
    cart: getLocalCartData(),
    total_item: 0,
    total_price: 0,
    shipping_fee: 50000

}


const CartContextProvider = (props) => {    //! whenever useCartContext function is called in any component it automatically calls CartContextProvider function

    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {

        localStorage.setItem('thapaCart', JSON.stringify(state.cart));
        dispatch({ type: 'UPDATE_CART_ITEMS' });
        dispatch({ type: 'TOTAL_PRICE' });

    }, [state.cart]);


    const addToCart = (id, color, amount, product) => {

        return dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });

    }

    const clearCart = () => {

        return dispatch({ type: 'CLEAR_CART' });

    }

    const deleteCartItem = (id) => {

        return dispatch({ type: 'DELETE_CART_ITEM', payload: id });

    }



    return (
        <CartContext.Provider value={{ ...state, addToCart, clearCart, deleteCartItem }}>
            {props.children}
        </CartContext.Provider>
    );

}


const useCartContext = () => {

    return useContext(CartContext);


}

export { CartContextProvider, useCartContext };