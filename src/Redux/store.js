import {applyMiddleware, compose, combineReducers,createStore} from 'redux'
import {reducer} from './TopContent/reducer'

import  thunk from 'redux-thunk'

const rootReducer = combineReducers({
    TopContent: reducer,
   
});

const logger = (store) => (next) => (action) => {
    console.log("dispatching some action", action, store.getState())
    const val = next(action)
    console.log("state now is", store.getState());
    return val;
}


const customMiddleware = (store) => (next) => (action) => {
    if(typeof action === "function") {
        return action(store.dispatch,store.getState);
    }
    return next(action);
}


const composeEnhancers = 
(typeof window !== "undefined" && 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) ||  compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer,enhancer);


console.log(store.getState())