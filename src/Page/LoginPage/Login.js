
import { Link} from 'react-router-dom';
import "./Login.css"

const Login = () => {
  return (
    <div className="outer-Login-container">
        <div className="login-outer-container">
        <form className="login-content-container">
          <div className="login-content-container">
          <h2 className='Login-heading-two'>Login</h2>
                <label className='lebel-text'>Email address</label>
                <input className="user-input" placeholder="annu@neog.com"/>

                <label className='lebel-text'>Password</label>
                <input className="user-input" placeholder="..................."/>
                <div className='forgotPasswodText'>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" className="remember-me">Remember me </label>
                  <Link to ="#" className='forgotPassword'>Forgot Password ?</Link>
                </div>
               
                <button className="videologin-btn
                ">Login</button>
                <h4 className='create-account'> <Link to ="/SignUpPage" className='forgotPassword createColor'  >Create New Account </Link><i className='fas fa-angle-right'></i></h4>
          </div>
        </form>
        </div>
    </div>
  )
}
export {Login}