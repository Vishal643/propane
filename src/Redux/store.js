import {combineReducers, createStore, applyMiddleware, compose} from "redux"

import thunk from "redux-thunk";
import { businessReducer } from "./BusinessPage/reducer";
import { searchReducer } from "./SearchFunction/reducer";


const rootReducer = combineReducers({
   business : businessReducer,
   search : searchReducer
})



const composeEnhancers =
(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const enhancer = composeEnhancers( applyMiddleware(thunk) );

const store = createStore(rootReducer, enhancer )

export {store}