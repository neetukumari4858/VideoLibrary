
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css"
import { useAuth } from "./../../Context/AuthContext";
import axios  from 'axios';
import {toast} from "react-toastify";

const Login = () => {
  const navigate=useNavigate()
  const {setLogedIn}=useAuth();
  const location =useLocation();
  const [user,setUser]=useState({
    email:"",
    password:"",
    checkPolicy:false,
  })
  const loginBtnHandler= async ()=>{
    const response= await axios.post("/api/auth/login",{
      email:user.email, password:user.password 
    })
    if (response.status===200){
      localStorage.setItem(
        "user",JSON.stringify(response.data.foundUser)
      );
      const token=response.data.encodedToken
      localStorage.setItem("token",token)
      setLogedIn(true)
      navigate(location?.state?.from?.pathname ?? "/", { replace: true });
      toast.success("Login Successfull !")
    }
    else{
      toast.error("Login Failed!")
    }
  }
  return (
    <div className="outer-Login-container">
        <div className="login-outer-container">
            <form className="login-content-container">
                <h2 className='Login-heading-two'>Login</h2>
                <label className='lebel-text'>Email address</label>
                <input className="user-input"
                type="email"
                value={user.email}
                 placeholder="Enter Email...."
                 onChange={(event)=>setUser({...user,email:event.target.value})}/>

                <label className='lebel-text'>Password</label>
                <input className="user-input" placeholder="Enter Password..."
                type="password"
                value={user.password}
                onChange={(event)=>setUser({...user,password:event.target.value})}
                />
                <div className='forgotPasswodText'>
                  <input type="checkbox" id="rememberMe" name="rememberMe" 

                  />
                  <label htmlFor="rememberMe" className="remember-me">Remember me </label>
                  <Link to ="/SignUpPage" className='forgotPassword'>Forgot Password ?</Link>
                </div>
               
                <button type='button' className="videologin-btn" onClick={()=>loginBtnHandler()}>Login</button>
                <h4 className='create-account'>Create New Account <i className='fas fa-angle-right'></i></h4>
            </form>
        </div>
    </div>
  )
}
export {Login} 