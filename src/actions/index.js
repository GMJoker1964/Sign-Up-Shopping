import * as types from '../contants/ActionType'

export const actAddToCart = (product,quantity) =>{
    return{
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}


export const actBuyProduct = (product,quantity) =>{
    return{
        type : types.BUY_PRODUCT,
        product,
        quantity
    }
}


export const actChangeQuantity = (product,quantity) =>{
    return{
        type : types.CHANGE_QUANTITY,
        product,
        quantity
    }
}

export const actDeleteProductInCart = (product) =>{
    return{
        type : types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actListProduct = (products) =>{
    return{
        type : types.LIST_PRODUCT,
        products,
    }
}


export const actInitAuth = (data) =>{
    return{
        type : types.INIT_AUTH,
        data,
    }
}


export const actSuccessLogin = (data) =>{
    return{
        type : types.LOGIN,
        data,
    }
}

export const actLogOut = () =>{
    return{
        type: types.LOGOUT
    }
}

export const actDetailProduct = (product) =>{
    return{
        type : types.DETAIL_PRODUCT,
        product,
    }
}

export const actSearchProduct = (products) =>{
    return{
        type : types.SEARCH_PRODUCT,
        products,
    }
}

export const actPaginate = () =>{
    return{
        type: types.PAGINATE
    }
}

export const actFilterPrice = (products) => {
    return {
        type: types.FILTER_PRODUCT,
        products
    }
}

export const actSortPrice = (products) => {
    return {
        type: types.SORT_PRODUCT,
        products
    }
}

export const actChangeMessage = () =>{
    return{
        type : types.CHANGE_MESSAGE,
    }
}

export const actUpdateStatus = (_id) =>{
    return {
        type: types.UPDATE_STATUS,
        _id
    }
}