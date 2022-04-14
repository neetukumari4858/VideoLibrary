import React from 'react'
// import {Link} from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
    return (  
    <nav className='header'>
        <div className="nav-section">
            <label className="logo">Royal</label> 
        </div>
        <div className="nav-section">
            <div className="outer-search-bar-div">
                <input type="text" className="search-bar" placeholder="   Search.."/>
            </div>
            <button className='login-btn' ><a className="nav-link" href ="/">Login</a></button> 
    
        </div>
    </nav> 
    );
}
export {Navbar};


