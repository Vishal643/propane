import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { techPageReducer } from './techPage/techPageReducer';
import { footerPagereducer } from './footerPage/reducer';

import {reducer as topreducer} from './TopContent/reducer'
import {reducer as advreducer} from './Advertisement/reducer'
import {reducer as bannerReducer} from './AdsBanner/reducer'
import { businessReducer } from "./BusinessPage/reducer";
import { searchReducer } from "./SearchFunction/reducer";
import {loginReducer} from './login/loginReducer';
import {registerReducer} from './register/registerReducer';


const rootReducer = combineReducers({
    techReducer: techPageReducer,
    footerPage: footerPagereducer,
    TopContent: topreducer,
    Advertisement: advreducer,
    business : businessReducer,
    search : searchReducer,
    AdsBanner: bannerReducer,
    register: registerReducer,
     auth: loginReducer,
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);





