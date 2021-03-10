import axios from 'axios'
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from './actionTypes'




const getDataRequest = () => {
    return {
        type: GET_DATA_REQUEST,
        
    }
}

const getDataSuccess = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload
    }
}

const getDataFailure = () => {
    return {

        type: GET_DATA_FAILURE,
        
    }
}

const fetchData = (params) => (dispatch) =>  {
    dispatch(getDataRequest());
    axios 
         .get("http://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f0ce44cfd85e4634beb89c16b71e569b")
         .then((res) => {
             const getDataSuccessAction = getDataSuccess(res.data.articles);
             console.log(res.data.articles)
             dispatch(getDataSuccessAction);
         })
         .catch((err) => {
             dispatch(getDataFailure());
         })
}




export {fetchData};