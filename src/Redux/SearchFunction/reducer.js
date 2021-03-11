import { GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./actionTypes"


const initState={
    isSearching: false,
    isError : false,
    searchArray : [],
    finding : ""
}

const searchReducer =( state = initState, {type, payload})=>{

    switch(type){
        case GET_SEARCH_REQUEST:{
            return{
                ...state,
                isSearching : true,
                isError : false
            }
        }

        case GET_SEARCH_SUCCESS:{
            return{
                ...state,
                isSearching : false,
                isError : false,
                searchArray: payload.res,
                finding: payload.query
            }
        }

        case GET_SEARCH_FAILURE:{
            return{
                ...state,
                isSearching : false,
                isError : true
            }
        }

        default:{
            return state
        }
    }
}

export {searchReducer}