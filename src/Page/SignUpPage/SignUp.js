import  React ,{ useState } from 'react';
import { Link,useNavigate ,useLocation} from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import {toast} from "react-toastify";
import "./SignUp.css";
import axios from 'axios';
const SignUp = () => {
    const navigate = useNavigate()
    const { setLogedIn } = useAuth();
    const location = useLocation();

    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        checkPolicy: false,
    })
    const signUpHandler = async () => {
        if (!newUser.checkPolicy)
            toast.warning(
                "tick the check box and agree to the terms and conditions"
            );
        else {
            const response = await axios.post("/api/auth/signup", {
                email: newUser.email, password: newUser.password, password: newUser.password, password: newUser.password, password: newUser.password
            })
            if (response.status === 201) {
                
                localStorage.setItem(
                    "user", JSON.stringify(response.data.createdUser)
                );
                const token = response.data.encodedToken
                localStorage.setItem("token", token)
                setLogedIn(true)
                navigate(location?.state?.from?.pathname ?? "/", { replace: true });
                toast.success("SignUp Successfull !")
            }
            else {
                toast.error("SignUp Failed!")
            }
        }
    }

    return (
        <div className="outer-Login-container">
            <div className="signup-container">
                <div className="login-content">
                    <h2 className='signUp-heading'>Sign up</h2>
                    <label className='signUp-lebel'>First Name</label>
                    <input type="text" className="sign-input" value={newUser.firstName} onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} placeholder="  First Name" />

                    <label className='signUp-lebel'>Last Name</label>
                    <input type="text" className="sign-input" value={newUser.lastName} onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} placeholder="  Last Name" />

                    <label className='signUp-lebel'>Email address</label>
                    <input type="text" className="sign-input" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} placeholder="  Enter Email " />

                    <label className='signUp-lebel'>Password</label>
                    <input type="text" className="sign-input" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} placeholder="  ............." />

                    <label className='signUp-lebel'>Confirm Password</label>
                    <input type="text" className="sign-input" value={newUser.confirmPassword} onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })} placeholder="  ............." /><br />
                    <div className='termsandConditions-div'>
                        <input type="checkbox" id='termsAndCondition' value={newUser.checkPolicy} onChange={(e) => setNewUser({ ...newUser, checkPolicy: !newUser.checkPolicy })} />
                        <label htmlFor="termsAndCondition" className='terms-and-condition'>I accept all Terms & Conditions</label>
                    </div>
                    
                    <button className="sign-btn" onClick={signUpHandler}>Sign up</button>
                    <h4 className='alreadyHaveAccount' >Already have an account? <Link to="/LoginPage" className='loginHere'> Login Here</Link></h4>
                </div>
            </div>
        </div>
    )
}
export {SignUp}

