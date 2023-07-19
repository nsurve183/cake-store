

import React from 'react'
import { NavLink } from 'react-router-dom'
import '../scss/navbar/navbar.css'



const NavbarComp = () => {
  return (
    <>
      <section className='img_section'>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparat">
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
            </div>
          </div>
        </nav>
      </div>
      </section>
    </>
  )
}

export default NavbarComp
