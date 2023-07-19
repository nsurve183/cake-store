

import React from 'react'
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import FooterComp from './components/FooterComp'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Router>
      <NavbarComp/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/about' Component={About}/>
          <Route exact path='/product' Component={Product}/>
          <Route exact path='/contact' Component={Contact}/>
        </Routes>
        <FooterComp />
      </Router>
    </>
  )
}

export default App

