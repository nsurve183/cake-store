import React from 'react'
import '../scss/about/about.css'


const About = () => {
  return (
    <div>
      <div className="aboutsection mt-md-4 mt-0 mb-5">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center ">
            <div className="col-lg-6 col-md-5 col-12 order-md-1 order-2">
              <img src="/images/about-img.png" className='img-fluid' alt="image not found" />
            </div>
            <div className="col-lg-6 col-md-7 col-12 mt-md-0 mt-4 order-md-2 order-1  mt-md-0 mb-4">
              <div className="card border-0 text-md-start text-center">
                <div className="card-body">
                  <h5 className="card-title text-md-start">We Are Cakkery</h5>
                  <p className="card-text mb-4 text-muted text-start">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                  <button className="btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
