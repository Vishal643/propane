import React from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {Redirect} from "react-router-dom"
import { fetchLoginData } from '../../Redux/login/action';

const Login =() => {
   const dispatch = useDispatch();
   const[username, setUsername] = React.useState("");
   const[password, setPassword] = React.useState("");
   const{loading,isAuth,error,errMessage} = useSelector((state) => state.auth , shallowEqual);

  
   
 
  const onSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchLoginData({username,password}))
      };
  


     if(isAuth) {
         return <Redirect to="/"/>
     }

    return loading? (
        <div>...Loading</div>
    ) : error ? (
        <div>{errMessage}: User not found</div> && <Redirect to="/register"/>
    ):
    (
        <form onSubmit= {onSubmit}>
            <div>
                <label htmlFor="username">
                     <input 
                        name= "username"
                        required
                        id="username"
                        placeholder="username"
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}
                     />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                     <input 
                        name= "password"
                        required
                        id="password"
                        placeholder="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                     />
                </label>
            </div>
            <button>LOGIN</button>

        </form>
    )
}

export default Login;