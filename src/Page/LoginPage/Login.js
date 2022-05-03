
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  const [user,setUser]=useState({
    email:"",
    password:"",
    checkPolicy:false,
  })
  return (
    <div className="outer-Login-container">
        <div className="login-outer-container">
            <div className="login-content-container">
                <h2 className='Login-heading-two'>Login</h2>
                <label className='lebel-text'>Email address</label>
                <input className="user-input"
                type="email"
                value={email}
                 placeholder="Enter Email...."
                 onChange={(event)=>setUser({...user,email:event.target.value})}/>

                <label className='lebel-text'>Password</label>
                <input className="user-input" placeholder="Enter Password..."
                type="password"
                value={password}
                onChange={(event)=>setUser({...user,password:event.target.value})}
                />
                <div className='forgotPasswodText'>
                  <input type="checkbox" id="rememberMe" name="rememberMe" 

                  />
                  <lebel htmlFor="rememberMe" className="remember-me">Remember me </lebel>
                  <Link to ="/SignUpPage" className='forgotPassword'>Forgot Password ?</Link>
                </div>
               
                <button className="videologin-btn" onClick={(e)=>loginBtnHandler(e,user)}>Login</button>
                <h4 className='create-account'>Create New Account <i className='fas fa-angle-right'></i></h4>
            </div>
        </div>
    </div>
  )
}
export {Login}

