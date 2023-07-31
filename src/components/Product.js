import React from 'react'
import '../scss/product/product.css'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className="productsection">
          <h1 className=' product_title text-white'>Our Products</h1>
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
                <Link className="product" to={'/weddingcake'}>
                    <img src="/images/c2.jpg" className='card-img-top mb-3' alt="..." />
                    <h4 className='mb-3'>Weeding Cake</h4>
                    <h6>Rs.800/-</h6>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
              <Link className="product" to={'/birthdaycake'}>
                    <img src="/images/cake1.png" className='card-img-top mb-3' alt="..." />
                    <h4 className='mb-3'>Birthday Cake</h4>
                    <h6>Rs.800/-</h6>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">
              <Link className="product" to={'/cupcake'}>
                    <img src="/images/cup-cake.jpeg" className='card-img-top mb-3' alt="..." />
                    <h4 className='mb-3'>Cup Cake</h4>
                    <h6>Rs.800/-</h6>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
              <Link className="product" to={'/partycake'}>
                    <img src="/images/p2.png" className='card-img-top mb-3 top' alt="..." />
                    <h4 className='mb-3'>Party Cake</h4>
                    <h6>Rs.800/-</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product
