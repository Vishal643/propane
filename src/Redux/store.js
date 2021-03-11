import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { techPageReducer } from './techPage/techPageReducer';
import { footerPagereducer } from './footerPage/reducer';
const rootReducer = combineReducers({
	techReducer: techPageReducer,
	footerPage: footerPagereducer,
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
