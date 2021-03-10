import {applyMiddleware, compose, combineReducers,createStore} from 'redux'
import {reducer as topreducer} from './TopContent/reducer'
import {reducer as advreducer} from './Advertisement/reducer'

import  thunk from 'redux-thunk'

const rootReducer = combineReducers({
    TopContent: topreducer,
    Advertisement: advreducer
});




const composeEnhancers = 
(typeof window !== "undefined" && 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) ||  compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer,enhancer);


