import axios from 'axios'
import { GET_ADV_FAILURE, GET_ADV_REQUEST, GET_ADV_SUCCESS, GET_RANDOM } from './actionTypes'




const getAdvRequest = () => {
    return {
        type: GET_ADV_REQUEST,
        
    }
}

const getAdvSuccess = (payload) => {
    return {
        type: GET_ADV_SUCCESS,
        payload
    }
}

const getAdvFailure = () => {
    return {

        type: GET_ADV_FAILURE,
        
    }
}

const getRandomSuccess = (id,img) => {
    //console.log(id,img)
    return {
        type: GET_RANDOM,
        payload: {id,img}
    }
}

const fetchAdv = (params) => (dispatch) =>  {
    dispatch(getAdvRequest());
  return  axios 
         .get("http://localhost:3000/advertisement")
         .then((res) => {
             const getAdvSuccessAction = getAdvSuccess(res.data);
             console.log(res.data)
             dispatch(getAdvSuccessAction);
         })
         .catch((err) => {
             dispatch(getAdvFailure());
         })
}

const fetchAdvById = (id) =>(dispatch) =>{ 
    dispatch(getAdvRequest());
   return axios 
         .get(`http://localhost:3000/advertisement/${id}`)
         .then((res) => {
             const {id,img} = res.data
             const getRandomSuccessAction = getRandomSuccess(id,img);
             console.log(id,img)
             dispatch(getRandomSuccessAction);
         })
         .catch((err) => {
             dispatch(getAdvFailure());
         })
     
}



export {fetchAdv,fetchAdvById};