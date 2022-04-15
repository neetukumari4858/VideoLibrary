import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";
const SignUp = () => {
    return (
        <div className="outer-Login-container">
            <div className="signup-container">
                <div className="login-content">
                    <h2 className='signUp-heading'>Sign up</h2>
                    <label className='signUp-lebel'>First Name</label>
                    <input type= "text" className="sign-input" placeholder="Enter your Name"/>

                    <label className='signUp-lebel'>Last Name</label>
                    <input type= "text" className="sign-input" placeholder="Enter your Last Name"/>

                    <label className='signUp-lebel'>Email address</label>
                    <input type= "text" className="sign-input" placeholder="annu@neog.com"/>

                    <label className='signUp-lebel'>Password</label>
                    <input type= "text" className="sign-input" placeholder="..................."/>

                    <label className='signUp-lebel'>Confirm Password</label>
                    <input type= "text" className="sign-input" placeholder="..................."/>

                    <input type="checkbox"/>
                    <button className="login-btn">Sign up</button>
                    <h4 >Already have an account ? <Link to="/LoginPage">Login Here</Link></h4>
                </div>
            </div>
        </div>
    )
}
export {SignUp}
{/* <p className='terms-and-condition'>I accept all Terms & Conditions</p> */}





// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./SignUp.css";
// const SignUp = () => {
//     return (
//          <div className="outer-product-side-bar">
//             <div className="signup-container">
//                 <div className="login-content">
//                     <h2>Sign up</h2>
//                     <label>First Name</label><br/>
//                     <input type= "text" className="sign-input" placeholder="Enter your Name"/><br/>

//                     <label>Last Name</label><br></br>
//                     <input type= "text" className="user-input" placeholder="Enter your Last Name"/><br/>

//                     <label>Email address</label><br></br>
//                     <input type= "text" className="user-input" placeholder="annu@neog.com"/><br/>

//                     <label>Password</label><br></br>
//                     <input type= "text" className="user-input" placeholder="..................."/><br/>

//                     <label>Confirm Password</label><br></br>
//                     <input type= "text" className="user-input" placeholder="..................."/><br></br>

//                     <input type="checkbox"/>I accept all Terms & Conditions
//                     <button className="login-btn">Sign up</button>
//                     <h4>Already have an account ? <Link to="/LoginPage">Login Here</Link></h4>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export {SignUp}