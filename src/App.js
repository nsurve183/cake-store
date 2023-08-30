

import React from 'react'
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import FooterComp from './components/FooterComp'
import ReduceCode from './components/ReduceCode'
import Signup from './components/Signup'
import Login from './components/Login'
import CakeState from './context/cakes/CakeState'
import AuthState from './context/cakes/AuthState'
import Addviews from './components/Addviews'


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import AddBirthDayCakes from './components/AddBirthDayCakes'
import AddWeddingCakes from './components/AddWeddingCakes'
import AddPartyCakes from './components/AddPartyCakes'
import AddCupCakes from './components/AddCupCakes'


const App = () => {
  return (
    <CakeState>
    <AuthState>
      <Router>
      <NavbarComp />
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
          <Route exact path='/addviews' Component={Addviews} />
          <Route exact path='/addbirthdaycakes' Component={AddBirthDayCakes} />
          <Route exact path='/addweddingcakes' Component={AddWeddingCakes} />
          <Route exact path='/addpartycakes' Component={AddPartyCakes} />
          <Route exact path='/addcupcakes' Component={AddCupCakes} />
         <Route path='*' Component={PageNotFound}/>
        </Routes>
        <FooterComp />
      </Router>
      </AuthState>
      </CakeState>
  )
}

export default App

