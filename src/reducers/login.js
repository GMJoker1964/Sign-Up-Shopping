import * as types from '../contants/ActionType'
import { saveAuth, clearAuth } from '../auth'

let initialState =  {}

const login = (state = initialState, action) =>{
    switch(action.type) {
        case types.INIT_AUTH:
            saveAuth(action.data)
            return {userInfo: action.data}
        case types.LOGIN:
            saveAuth(action.data)
            return {userInfo: action.data}
        case types.LOGOUT:
            clearAuth()
            return {userInfo: ''}
        default: 
            return {...state}
    }
}



export default login