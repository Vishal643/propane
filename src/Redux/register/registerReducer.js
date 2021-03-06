import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"
import {setToken,getToken} from '../../Components/LoginPage/Utils'

const registered = getToken('isRegistered') ? true : false 
console.log(registered)
const initState = {
    isLoading:false,
    error:false,
    errMsg:"",
    message:"",
    isRegistered:registered
    
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
            setToken(true);
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