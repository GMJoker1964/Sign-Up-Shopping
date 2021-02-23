import * as types from '../contants/ActionType'

let initialState = {
    products: [],
    product: []
}

const products = (state = initialState,action) =>{
    switch(action.type) {
        case types.LIST_PRODUCT:
            return {
                ...state,
                products: action.products
            }
        case types.SEARCH_PRODUCT:
            return {
                ...state,
                products: action.products
            }
        case types.DETAIL_PRODUCT:
            return {
                ...state,
                product: action.product
            }
       
        case types.PAGINATE:
            // console.log(action);
            return [...state]
        case types.FILTER_PRODUCT:
            return {
                ...state,
                products: action.products
            }
        case types.SORT_PRODUCT:
            return {
                ...state,
                products: action.products
            }
        default: 
            return {
                ...state
            }
    }
}

export default products