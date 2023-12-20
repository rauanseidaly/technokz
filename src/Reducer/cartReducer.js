

const CartReducer = (state, action) => {


    if (action.type === 'ADD_TO_CART') {

        let { id, color, amount, product } = action.payload;

        let matchedItem = state.cart.find((element) => {
            return element.id === id + color;
        });

        if (matchedItem) {
            const updatedProducts = state.cart.map((element) => {

                if (element.id === id + color) {
                    let newAmount = element.amount + amount;
                    if (newAmount <= element.max) {
                        return {
                            ...element,
                            amount: newAmount
                        }
                    } else {
                        return {
                            ...element,
                            amount: element.max
                        }
                    }
                } else {
                    return element;
                }

            });

            return {
                ...state,
                cart: updatedProducts,

            }

        } else {
            const cartProduct = {
                id: id + color,
                amount,
                color,
                price: product.price,
                name: product.name,
                max: product.stock,
                image: product.image[0].url
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],

            }
        }
    }

    if (action.type === 'UPDATE_CART_ITEMS') {

        const total_items = state.cart.reduce((accumulator, element) => {

            let { amount } = element;

            let totalSum = accumulator + amount;
            return totalSum;

        }, 0);

        return {
            ...state,
            total_item: total_items
        }
    }

    if (action.type === 'TOTAL_PRICE') {

        let sum;

        let total_price = state.cart.reduce((accumulatorValue, element) => {
            const { price, amount } = element;

            sum = accumulatorValue + price * amount;

            return sum;

        }, 0);

        return {
            ...state,
            total_price: total_price
        }
    }



    if (action.type === 'CLEAR_CART') {

        return {
            ...state,
            cart: []
        }
    }



    if (action.type === 'DELETE_CART_ITEM') {

        let updatedCart = state.cart.filter((element) => {
            return element.id !== action.payload;

        })


        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'CART_ITEMS_NUMBER') {

        let items;

        if (state.cart === null) {
            items = 0;
        } else {
            items = state.cart.length;
        }

        return {
            ...state,
            total_item: items
        }
    }



}

export default CartReducer;