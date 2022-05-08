import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Navbar = () => {
    const { userDetail: { token, user },setUserdetail } = useAuth();
    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserdetail({token:"",user:{}})
    }
    return (
        <nav className='header'>
            <div className="nav-section">
                <label className="logo">Royal Library</label>
            </div>
            <div className="nav-section">
                <div className="outer-search-bar-div">
                    <input type="text" className="search-bar" placeholder="   Search.." />
                </div>
                {token && user ? <button className='login-btn text-color' onClick={logoutHandler}>Logout</button> : <button className='login-btn'><Link className="nav-link" to="loginPage">Login</Link></button>
                }
            </div>
        </nav>
    );
}
export { Navbar };


