import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import login from './login'
import message from './message'

export default combineReducers({
    products,
    cart,
    login,
    message
})