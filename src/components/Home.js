

import React from 'react';
import TitleComp from './TitleComp';
import CakesTypes from './CakesTypes';
import About from './About';
import Product from './Product';
import Contact from './Contact';


function Home() {
  return (
    <div>
      <TitleComp />
      <CakesTypes />
      <About />
      <Product />
      <Contact />
    </div>
  )
}

export default Home
