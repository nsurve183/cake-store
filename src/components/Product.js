import React from 'react'
import '../scss/product/product.css'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className="productsection">
          <h1 className=' product_title text-white'>Our Products</h1>
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
                <NavLink className="product" to={'/weddingcake'}>
                    <img src="/images/cake2.jpg" className='img-fluid mb-3' alt="image not found" />
                    <h4 className='mb-3'>Weeding Cake</h4>
                    <h6>Rs.800/-</h6>
                </NavLink>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
              <NavLink className="product" to={'/birthdaycake'}>
                    <img src="/images/cake1.png" className='img-fluid mb-3' alt="image not found" />
                    <h4 className='mb-3'>Birthday Cake</h4>
                    <h6>Rs.800/-</h6>
                </NavLink>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
              <NavLink className="product" to={'/cupcake'}>
                    <img src="/images/cup-cake.jpeg" className='img-fluid mb-3' alt="image not found" />
                    <h4 className='mb-3'>Cup Cake</h4>
                    <h6>Rs.800/-</h6>
                </NavLink>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
              <NavLink className="product" to={'/partycake'}>
                    <img src="/images/p2.png" className='img-fluid mb-3' alt="image not found" />
                    <h4 className='mb-3'>Party Cake</h4>
                    <h6>Rs.800/-</h6>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product
