
import React, { useState } from 'react';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import "./SignUp.css";
import axios  from 'axios';
import { useAuth } from '../../Context/AuthContext';

const SignUp = () => {

    const navigate=useNavigate()
    const {setLogedIn}=useAuth();
    const location =useLocation();

    const [newUser,setNewUser]=useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName:"",
        lastName:"",
        checkPolicy:"",
    })
    
    const signUpHandler=async()=>{
        const res= await axios.post("/api/auth/signup",{
            email:newUser.email, password:newUser.password , password:newUser.password , password:newUser.password , password:newUser.password
          })
        console.log(res,"signup")
        setLogedIn(true)
        navigate(location?.state?.from?.pathname ?? "/", { replace: true });
    }
    return (
        <div className="outer-Login-container">
            <div className="signup-container">
                <div className="login-content">
                    <h2 className='signUp-heading'>Sign up</h2>
                    <label className='signUp-lebel'>First Name</label>
                    <input type= "text" className="sign-input" value={newUser.firstName} onChange={(e)=>setNewUser({...newUser,firstName: e.target.value})} placeholder="Enter First Name"/>

                    <label className='signUp-lebel'>Last Name</label>
                    <input type= "text" className="sign-input" value={newUser.lastName} onChange={(e)=>setNewUser({...newUser,lastName: e.target.value})} placeholder="Enter your Last Name"/>

                    <label className='signUp-lebel'>Email address</label>
                    <input type= "text" className="sign-input"  value={newUser.email}  onChange={(e)=>setNewUser({...newUser,email: e.target.value})} placeholder="annu@neog.com"/>

                    <label className='signUp-lebel'>Password</label>
                    <input type= "text" className="sign-input"  value={newUser.password} onChange={(e)=>setNewUser({...newUser,password: e.target.value})} placeholder="..................."/>

                    <label className='signUp-lebel'>Confirm Password</label>
                    <input type= "text" className="sign-input" value={newUser.confirmPassword}  onChange={(e)=>setNewUser({...newUser,confirmPassword: e.target.value})} placeholder="..................."/><br/>
                    <div className='termsandConditions-div'>
                        <input type="checkbox" id='termsAndCondition'  value={newUser.checkPolicy} onChange={(e)=>setNewUser({...newUser,checkPolicy:!newUser.checkPolicy})}/> 
                        <label htmlFor="termsAndCondition" className='terms-and-condition'>I accept all Terms & Conditions</label>
                    </div>

                    <button className="sign-btn" onClick={signUpHandler}>Sign up</button>
                    <h4 className='alreadyHaveAccount' >Already have an account? <Link to="/LoginPage" className='forgotPassword'> Login Here</Link></h4>
            
                </div>
            </div>
        </div>
    )
}
export {SignUp}





