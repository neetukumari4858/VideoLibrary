import React from 'react'
import './Navbar.css'

import { useAuth } from '../../Context/AuthContext'

const Navbar = () => {
  const { isLogedIn, setLogedIn } = useAuth()

  return (
    <nav className="header">
      <div className="nav-section">
        <label className="logo">Royal Library</label>
      </div>
      <div className="nav-section">
        <div className="outer-search-bar-div">
          <input type="text" className="search-bar" placeholder="   Search.." />
        </div>

        <button
          className="login-btn text-color"
          onClick={() =>
            isLogedIn ? setLogedIn(false) : navigate('/loginPage')
          }
        >
          {isLogedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  )
}
export { Navbar }
