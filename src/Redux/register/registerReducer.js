import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"

const initState = {
    isLoading:false,
    error:false,
    errMsg:"",
    message:"",
    isRegistered:false
}

export const registerReducer = (state = initState, {type,payload}) =>{
    switch(type){
        case REGISTER_REQUEST:{
            return{
                ...state,
                isLoading:true,
                error:false
            }
        }

        case REGISTER_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                error:false,
                isRegistered:true,
               
                message: payload
                
            }
        }

        case REGISTER_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isRegistered:false,
                error: true,
                errMsg:payload.message

            }
        }

        default:
            return state


    }
}