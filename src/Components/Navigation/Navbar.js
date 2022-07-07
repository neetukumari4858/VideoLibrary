import React from 'react'

import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const navigate = useNavigate()
  const { userDispatch } = useAuth()
  const token = localStorage.getItem('token')

  const logoutHandler = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    userDispatch({ type: 'LOGOUT' })
    toast.success('LoggedOut successfully')
    navigate('/')
  }
  return (
    <nav className="header">
      <div className="nav-section">
        <Link className="logo" to="/VideoListing">Royalplay </Link>
      </div>
      <div className="nav-section">
        <h3 className="explore_text">
          <Link className="nav-link" to="/VideoListing">
            Explore{' '}
          </Link>
        </h3>
        {token ? (
          <button className="login-btn text-color" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <button className="login-btn">
            <Link className="nav-link" to="loginPage">
              Login
            </Link>
          </button>
        )}
      </div>
    </nav>
  )
}
export { Navbar }
