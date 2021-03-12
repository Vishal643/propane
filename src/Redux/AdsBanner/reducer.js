import { GET_BANNER_FAILURE, GET_BANNER_REQUEST, GET_BANNER_SUCCESS, GET_BANNER} from "./actionTypes"

const initState = {
    isLoading: false,
    bannerStr : "",
    error: null
}

export const reducer = (state=initState,{type,payload}) => {
    console.log(payload)
    switch(type) {
         
          case GET_BANNER_REQUEST: {
              return {
                  ...state,
                  isLoading: true,
                  error: null
              }
          }

          case GET_BANNER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                bannerStr:payload,
                error: null
            }
        }

        case GET_BANNER_FAILURE: {
            return {
                ...state,
                isLoading:false,
                error: true
                
            }
        }
        case GET_BANNER: {
            console.log(payload)
            return {
                ...state,
                isLoading: false,
                bannerStr:payload.img
            }
        }

      
            default: {
                return state
            }
    }
}

