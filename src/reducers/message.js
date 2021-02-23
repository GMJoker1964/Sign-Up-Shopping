import * as types from '../contants/ActionType'
import * as Message from '../contants/Message'
let initialState = Message.MSG_WELCOMDE

const message = (state = initialState,action) =>{

    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message
        default: 
            return [...state]
    }
}



export default message