import {StrictMode} from 'react' ;
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import { store } from './Redux/store';



const rootElement = document.getElementById("root")
ReactDOM.render (
    <StrictMode>
        <BrowserRouter>
       <Provider store={store}>
        <App/>
        </Provider> 
        </BrowserRouter>
    </StrictMode>,
    rootElement
);

