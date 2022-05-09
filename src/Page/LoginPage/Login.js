import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  const navigate=useNavigate()
  const {setLogedIn,setUserdetail}=useAuth();
  const location =useLocation();
  const [user,setUser]=useState({
    email:"",
    password:"",
    checkPolicy:false,
  })
  const loginBtnHandler= async ()=>{
    if (!user.checkPolicy)
        toast.warning(
          "tick the check box and agree to the terms and conditions"
        );
    else{
      const response= await axios.post("/api/auth/login",{
        email:user.email, password:user.password 
      })
      if (response.status===200){
        localStorage.setItem(
          "user",JSON.stringify(response.data.foundUser)
        );
        const token=response.data.encodedToken
        localStorage.setItem("token",token)
        setUserdetail({token:response.data.encodedToken, user:response.data.foundUser})
        setLogedIn(true)
        navigate(location?.state?.from?.pathname ?? "/", { replace: true });
        toast.success("Login Successfull !")
      }
      else{
        toast.error("Login Failed!")
      }
    }
  }
  return (
    <div className="outer-Login-container">
        <div className="login-outer-container">
            <div className="login-content-container">
                <h2 className='Login-heading-two'>Login</h2>
                <label className='lebel-text'>Email address</label>
                <input className="user-input"
                type="email"
                value={user.email}
                 placeholder="  demo@gmail.com "
                 onChange={(event)=>setUser({...user,email:event.target.value})}/>

                <label className='lebel-text'>Password</label>
                <input className="user-input" placeholder="  Enter Password..."
                type="password"
                value={user.password}
                onChange={(event)=>setUser({...user,password:event.target.value})}
                />
                <div className='forgotPasswodText'>
                  <input type="checkbox"  id="rememberMe" name="rememberMe" checked={user.checkPolicy}
                      onChange={() =>
                        setUser({ ...user, checkPolicy: !user.checkPolicy })
                      }
                  />
                  <label htmlFor="rememberMe" className="remember-me">Remember me </label>
                  <p className='forgotPassword'>Forgot Password ?</p>
                </div>
               
                <button type='button' className="videologin-btn" onClick={()=>loginBtnHandler()}>Login</button>
                <h4 className='create-account'><Link to ="/SignUpPage" className='createAccount'>Create New Account</Link> <i className='fas fa-angle-right'></i></h4>
            </form>

        </div>
    </div>
  )
}
export {Login}

