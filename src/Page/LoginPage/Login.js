import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  return (
    // <div className="outer-product-side-bar">
    <div className="outer-Login-container">
        <div className="login-outer-container">
            <div className="login-content-container">
                <h2 className='Login-heading-two'>Login</h2>
                <label className='lebel-text'>Email address</label>
                <input className="user-input" placeholder="annu@neog.com"/>

                <label className='lebel-text'>Password</label>
                <input className="user-input" placeholder="..................."/>
                <div className='forgotPasswodText'>
                  <input type="checkbox" id="rememberMe" />
                  <lebel htmlFor="rememberMe" className="remember-me">Remember me </lebel>
                  <Link to ="/SignUpPage" className='forgotPassword'>Forgot Password ?</Link>
                </div>
               
                <button className="videologin-btn
                ">Login</button>
                <h4 className='create-account'>Create New Account <i className='fas fa-angle-right'></i></h4>
            </div>
        </div>
    </div>
  )
}
export {Login}

