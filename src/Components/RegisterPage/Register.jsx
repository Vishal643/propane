import React from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { registerUser } from "../../Redux/register/action";
import {Redirect} from 'react-router-dom'
import styles from '../../Styles/Register.module.css'

const Register =() => {
    const dispatch = useDispatch();
    const[username, setUsername] = React.useState("");
    const[password, setPassword] = React.useState("");
    const[name, setName] = React.useState("");
    const[email, setEmail] = React.useState("");
    const[mobile,setMobile] = React.useState("");
    const[description, setDescription] = React.useState("");


    const{loading,isRegistered,message} = useSelector((state) => state.register , shallowEqual);
 
    console.log(message)
    console.log(isRegistered)
  
   const onSubmit = (e) => {
         e.preventDefault();
         dispatch(registerUser({username,password,name,email,mobile,description}))
       };
   


     
        return !isRegistered?(
          
            <div className={styles.register}>
              <h1>Registration</h1>
            <form onSubmit = {onSubmit}>
                <div>
                    <input 
                      type="text"
                      required
                      name="name"
                      placeholder="name"
                      value={name}
                      onChange={(e)=> setName(e.target.value)} />
                </div>

                <div>
                    <input 
                      type="text"
                      required
                      name="email"
                      placeholder="email"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div>
                    <input 
                      type="text"
                      required
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)} />
                </div>

                <div>
                    <input 
                      type="text"
                      required
                      name="username"
                      placeholder="username"
                      value={username}
                      onChange={(e)=> setUsername(e.target.value)} />
                </div>

                <div>
                    <input 
                      type="text"
                      required
                      name="mobile"
                      placeholder="mobile"
                      value={mobile}
                      onChange={(e)=> setMobile(e.target.value)} />
                </div>

                <div>
                    <input 
                      type="text"
                      required
                      name="description"
                      placeholder="description"
                      value={description}
                      onChange={(e)=> setDescription(e.target.value)} />
                </div>
                <input type="submit"
                 value =  "submit"/>
            </form>
            {
                loading && <div>loading please wait </div> 
            }
           
            {message}

            </div>
        ) : (
          <Redirect to="/login" />
        )
    }



export default Register;


// {
//     "name": "MASAI School",
//     "email": "hello@masai.com"
//     "password": "secret",
//     "username": "masai-school",
//     "mobile": "9876543210",
//     "description": "A Transformation in education!" 
//   }