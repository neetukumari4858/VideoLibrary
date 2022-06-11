import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const navigate = useNavigate()
  const { userDetail, userDispatch } = useAuth()
  const { token } = userDetail

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
        <label className="logo">Royalplay</label>
      </div>
      <div className="nav-section">
        <div className="outer-search-bar-div">
          <input type="text" className="search-bar" placeholder="   Search.." />
        </div>
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
