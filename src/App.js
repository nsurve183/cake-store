

import React from 'react'
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import FooterComp from './components/FooterComp'
import CakeState from './context/cakes/CakeState'
import ReduceCode from './components/ReduceCode'
import Signup from './components/Signup'
import Login from './components/Login'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


const App = () => {
  return (
    <>
    <CakeState>
      <Router>
      <NavbarComp/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/about' Component={About}/>
          <Route exact path='/product' Component={Product}/>
          <Route exact path='/contact' Component={Contact}/>
          <Route exact path='/weddingcake' Component={ReduceCode}/>
          <Route exact path='/birthdaycake' Component={ReduceCode}/>
          <Route exact path='/cupcake' Component={ReduceCode}/>
          <Route exact path='/partycake' Component={ReduceCode}/>
          <Route exact path='/signup' Component={Signup}/>
          <Route exact path='/login' Component={Login} />
        </Routes>
        <FooterComp />
      </Router>
      </CakeState>
    </>
  )
}

export default App

