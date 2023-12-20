

const filterReducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_FILTER_PRODUCTS':

            var priceArr = action.payload.map((element) => {
                return element.price;
            })

            var maxPrice = Math.max(...priceArr);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice,
                    price:maxPrice
                  
                }
            };

        case 'SET_GRID_VIEW':
            return {
                ...state,
                grid_view: true,

            };

        case 'SET_LIST_VIEW':
            return {
                ...state,
                grid_view: false,

            };

        case 'SET_SORTING_VALUE':
            return {
                ...state,
                sorting_type: action.payload

            };


        case 'SORTING_PRODUCTS':
            const { filter_products, sorting_type } = state;

            const temporaryProducts = [...filter_products];

            const sorting = (a, b) => {
                if (sorting_type === 'lowest') {
                    return a.price - b.price;
                }
                if (sorting_type === 'highest') {
                    return b.price - a.price;
                }
                if (sorting_type === 'a-z') {
                    return a.name.localeCompare(b.name);
                }
                if (sorting_type === 'z-a') {
                    return b.name.localeCompare(a.name);
                }

            }

            const sortedProducts = temporaryProducts.sort(sorting);
            return {
                ...state,
                filter_products: sortedProducts
            }


        case 'UPDATE_FILTER_VALUE':

            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }


            };

        case 'FILTER_PRODUCTS':

            const { filters: { text, company, category, color, price }, all_products } = state;
            var temporaryProd = [...all_products];

            //!  "if(variable){ code }" this is used to execute code inside if statement,whenever changes in value of variable happens.

            if (text) {
                temporaryProd = temporaryProd.filter((element) => {
                    return element.name.toLowerCase().includes(text);
                })
            }

            if (category !== 'All') {
                temporaryProd = temporaryProd.filter((element) => {
                    return element.category === category;

                });


            }


            if (company !== 'All') {
                temporaryProd = temporaryProd.filter((element) => {
                    return element.company === company;

                });
            }

            if (color !== 'All') {
                temporaryProd = temporaryProd.filter((element) => {
                    return element.colors.includes(color);

                });
            }

            if (price) {
                temporaryProd = temporaryProd.filter((element) => {
                    return element.price <= price;
                });

            }

            return {
                ...state,
                filter_products: temporaryProd

            };




        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: 'All',
                    company: 'All',
                    color: 'All',
                    maxPrice: state.filters.maxPrice,
                    price: 0,
                    minPrice: state.filters.minPrice
                }


            };


        default:
            return state;
    }




}

export default filterReducer;
