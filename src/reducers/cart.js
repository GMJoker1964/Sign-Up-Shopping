import * as types from '../contants/ActionType'
let data = JSON.parse(localStorage.getItem('data'))

let initialState =   data ? data : []

const cart = (state = initialState,action) =>{
    let { product,quantity } =action
    let index = -1
    switch(action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state,product)
            console.log('>>', index)
            if(index !== -1){
                state[index].quantity +=quantity;
            }else{
                state.push({
                    product,
                    quantity
                })
            }      

            localStorage.setItem('data',JSON.stringify(state))
            return [...state]
        case types.CHANGE_QUANTITY:
            index = findProductInCart(state,product)
            if(index !== -1){
                state[index].quantity =quantity;
            }
            localStorage.setItem('data',JSON.stringify(state))
            return [...state]
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state,product)
            if(index !== -1){
                state.splice(index,1)  
            }
            localStorage.setItem('data',JSON.stringify(state))
            return [...state] 
        case types.BUY_PRODUCT:
            let newState = [
                {
                    product,
                    quantity: 1
                }
            ]
            localStorage.setItem('data',JSON.stringify(newState))
            return [...newState] 
        default: 
            return [...state] 
    }
}

let findProductInCart = (cart, product) =>{
    let index =-1
    if(cart.length >0){
        for(let i= 0; i< cart.length; i++){
            console.log(cart[i].product._id, product._id)
            if(cart[i].product._id === product._id){
                index = i
                break;
            }
        }
    }
    return index
}

export default cart