import { GET_ADV_FAILURE, GET_ADV_REQUEST, GET_ADV_SUCCESS, GET_RANDOM} from "./actionTypes"

const initState = {
    isLoading: false,
    adv: [],
    randomArr : "",
    error: null
}

export const reducer = (state=initState,{type,payload}) => {
    console.log(payload)
    switch(type) {
         
          case GET_ADV_REQUEST: {
              return {
                  ...state,
                  isLoading: true,
                  error: null
              }
          }

          case GET_ADV_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                adv:payload,
                error: null
            }
        }

        case GET_ADV_FAILURE: {
            return {
                ...state,
                isLoading:false,
                error: true
                
            }
        }
        case GET_RANDOM: {
            console.log(payload)
            return {
                ...state,
                isLoading: false,
                randomArr:payload.img
            }
        }

      
            default: {
                return state
            }
    }
}

