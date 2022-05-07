import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Navbar = () => {
    const logoutHandler=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        

    }
    return (  
    <nav className='header'>
        <div className="nav-section">
            <label className="logo">Royal Library</label> 
        </div>
        <div className="nav-section">
            <div className="outer-search-bar-div">
                <input type="text" className="search-bar" placeholder="   Search.."/>
            </div>
            <button className='login-btn'><Link className="nav-link" to ="loginPage">Login</Link></button> 
    
        </div>
    </nav> 
    );
}
export {Navbar};


