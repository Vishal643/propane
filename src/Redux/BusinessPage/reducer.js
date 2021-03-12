import { GET_BUSINESSAPI_FAILURE, GET_BUSINESSAPI_REQUEST, GET_BUSINESSAPI_SUCCESS, GET_BUSINESS_INDIA_FAILURE, GET_BUSINESS_INDIA_REQUEST, GET_BUSINESS_INDIA_SUCCESS, GET_INTERNATIONAL_SUCCESS } from "./actionTypes";

const initstate={
    businessData :[],
    businessIndia : [],
    economyNews:[],
    isLoading: false,
    isError : false, 
    isLoadingIndia : false,
    isErrorIndia : false,
    typeGen:"",
    typeIn:"",
    typeInt:""


}

const businessReducer = (state= initstate, {type, payload})=>{

    switch(type){
        case GET_BUSINESSAPI_REQUEST :{
            
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }

        case GET_BUSINESSAPI_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                businessData: payload.news,
                typeGen : payload.name
            }
        }

        case GET_BUSINESSAPI_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case GET_BUSINESS_INDIA_REQUEST:{
            return{
                ...state,
                isLoadingIndia: true,
                isErrorIndia: false
            }
        }

        
        case GET_BUSINESS_INDIA_SUCCESS:{
            return{
                ...state,
                isLoadingIndia: false,
                isErrorIndia: false,
                businessIndia: payload.news,
                typeIn : payload.name

            }
        }

        
        case GET_BUSINESS_INDIA_FAILURE:{
            return{
                ...state,
                isLoadingIndia: false,
                isErrorIndia: true
            }
        }

        case GET_INTERNATIONAL_SUCCESS:{
            return{
                ...state,
                isLoadingIndia: false,
                isErrorIndia: false,
                economyNews: payload.news,
                typeInt : payload.name

            }
        }
       

        default:{
            return state
        }
    }
}

export {businessReducer}