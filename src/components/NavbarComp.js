

import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../scss/navbar/navbar.css'


const NavbarComp = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const logout = () => {
    localStorage.removeItem('token')
    alert("Logout Successfully")
    navigate('/login');
  }
  return (
    <>
    {(location.pathname === '/adminui') ? "" : <section className='img_section'>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparat d-flex justify-content-between">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Cakkery</NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
            </button> 

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink className="nav-link ms-sm-3" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item ms-sm-3">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item ms-sm-3">
                  <NavLink className="nav-link" to="/product">Product</NavLink>
                </li>
                <li className="nav-item ms-sm-3">
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
              </ul>
              {!localStorage.getItem('token') ?  <div>
               {/* if user not login */}
              <NavLink className='btn btn-outline-warning btn-sm ms-sm-3 text-white mt-lg-0 mt-2' to={'/signup'} style={{fontSize: "15px", letterSpacing: '1px'}} >Signup</NavLink>
              <NavLink className='btn btn-outline-warning btn-sm ms-3 text-white mt-lg-0 mt-2' to={'/login'} style={{fontSize: "15px", letterSpacing: '1px'}} >Login</NavLink>
              </div> : 
              <div>
              {/* if user login */}
              <button className='btn btn-outline-warning btn-sm ms-3 text-white mt-lg-0 mt-2' onClick={logout} style={{fontSize: "15px", letterSpacing: '1px'}} >Logout</button>
              <NavLink className='btn btn-outline-warning btn-sm ms-3 text-white mt-lg-0 mt-2' to={'/addviews'} style={{fontSize: "15px", letterSpacing: '1px'}} >Add Views</NavLink>
              </div>}
            </div>
          </div>
        </nav>
      </div>
      </section>}
      
    </>
  )
}

export default NavbarComp
