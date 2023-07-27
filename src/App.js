

import React from 'react'
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import FooterComp from './components/FooterComp'
import CakeState from './context/cakes/CakeState'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import WeddingCake from './components/caketypes/WeddingCake'
import BirthdayCake from './components/caketypes/BirthdayCake'
import Cupcake from './components/caketypes/Cupcake'
import PartyCake from './components/caketypes/PartyCake'


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
          <Route exact path='/weddingcake' Component={WeddingCake}/>
          <Route exact path='/birthdaycake' Component={BirthdayCake}/>
          <Route exact path='/cupcake' Component={Cupcake}/>
          <Route exact path='/partycake' Component={PartyCake}/>
        </Routes>
        <FooterComp />
      </Router>
      </CakeState>
    </>
  )
}

export default App

