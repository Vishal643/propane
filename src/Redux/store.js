import {combineReducers, createStore, applyMiddleware, compose} from "redux"

import thunk from "redux-thunk";
import { businessReducer } from "./BusinessPage/reducer";


const rootReducer = combineReducers({
   business : businessReducer
})



const composeEnhancers =
(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const enhancer = composeEnhancers( applyMiddleware(thunk) );

const store = createStore(rootReducer, enhancer )

export {store}