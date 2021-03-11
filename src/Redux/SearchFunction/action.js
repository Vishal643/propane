import axios from "axios"
import {GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE} from "./actionTypes"

const getSearchRequest =()=>{
    return{
        type:GET_SEARCH_REQUEST
    }
}

const getSearchSuccess =(res, query)=>{
    return{
        type: GET_SEARCH_SUCCESS,
        payload :{res, query}
    }
}

const getSearchFailure=()=>{
    return{
        type: GET_SEARCH_FAILURE
    }
}

const getSearch=(query)=>(dispatch)=>{

    dispatch( getSearchRequest() )

    return axios.get("https://fake-mocker.herokuapp.com/all_news",{
        params:{
            q : query
        }
    }).then((res)=>dispatch( getSearchSuccess(res.data, query) ))
    .catch((err)=>dispatch( getSearchFailure() ))
}

export {getSearch}