import {
    API_MOCKER_REQUEST,
    API_MOCKER_SUCCESS,
    API_MOCKER_FAILURE
  } from "./actionTypes";
  
  let initState = {
    isAuth: false,
    token: "",
    error: null,
    loading: false,
    currentUser: "",
    errMessage: ""
  };
  
  export const loginReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case API_MOCKER_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
  
      case API_MOCKER_SUCCESS: {
        return {
          ...state,
          isAuth: true,
          loading: false,
          token: payload.token,
          currentUser: payload.username
        };
      }
  
      case API_MOCKER_FAILURE: {
        return {
          ...state,
          loading: false,
          error: true,
          errMessage: payload.message
        };
      }
  
      default:
        return state;
    }
  };
  