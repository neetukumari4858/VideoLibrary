import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
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


