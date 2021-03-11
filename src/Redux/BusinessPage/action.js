import { GET_BUSINESSAPI_FAILURE, GET_BUSINESSAPI_REQUEST, GET_BUSINESSAPI_SUCCESS,GET_BUSINESS_INDIA_REQUEST, GET_BUSINESS_INDIA_SUCCESS, GET_BUSINESS_INDIA_FAILURE, GET_INTERNATIONAL_SUCCESS } from "./actionTypes"
import axios from "axios"

const getBusinessRequest=()=>{
    return{
        type: GET_BUSINESSAPI_REQUEST
    }
}

const getBusinessSuccess=(payload)=>{
    return{
        type: GET_BUSINESSAPI_SUCCESS, 
        payload
    }
}

const getBusinessFailure=()=>{
    return{
        type: GET_BUSINESSAPI_FAILURE
    }
}

const getBusinessIndiaReq=()=>{
    return{
        type: GET_BUSINESS_INDIA_REQUEST
    }
}

const getBusinessIndiaSuccess=(payload)=>{
    return{
        type: GET_BUSINESS_INDIA_SUCCESS, 
        payload
    }
}

const getBusinessIndiaFailure=()=>{
    return{
        type: GET_BUSINESS_INDIA_FAILURE
    }
}

const getBusinessInternationalSuccess=(payload)=>{
    return{
        type: GET_INTERNATIONAL_SUCCESS, 
        payload
    }
}

const getBusinessApi=(params)=>(dispatch)=>{

    dispatch(getBusinessRequest())

    return axios.get("https://fake-mocker.herokuapp.com/general_business_news",{
        params:{
            _limit:5
        }
    }
    ).then((res)=>dispatch(getBusinessSuccess(res.data) ) )
    .catch((err)=>dispatch(getBusinessFailure() ))
}



const getBusinessIndia=(params)=>(dispatch)=>{

    dispatch(getBusinessIndiaReq())

    return axios.get("https://fake-mocker.herokuapp.com/indian_business_news",{
        params:{
            _limit:5
        }
    }
    ).then((res)=>dispatch( getBusinessIndiaSuccess(res.data) ) )
    .catch((err)=>dispatch( getBusinessIndiaFailure() ))

}

const getBusinessInternational=(params)=>(dispatch)=>{

    // dispatch(getBusinessIndiaReq())

    return axios.get("https://fake-mocker.herokuapp.com/international_business_news",{
        params:{
            _limit:5
        }
    }
    ).then((res)=>dispatch( getBusinessInternationalSuccess(res.data) ) )
    .catch((err)=> console.log(err))

   
    // .then((res)=>console.log(res) )

}

export {getBusinessApi, getBusinessIndia, getBusinessInternational}