import React from 'react'
import '../scss/contact/contact.css'

const Contact = () => {
  return (
    <div>
      <div className="contactsection mb-4">
        <h1 className='contact_title mb-4'>Contact Us</h1>
        <div className="container">
          <form className="row g-3 d-flex justify-content-center align-items-center  text-center">
            <div className="col-md-5 mb-3">
              <input type="text" className="form-control form-control-lg" name='fname' placeholder='First Name' id="fname" />
            </div>
            <div className="col-md-5 mb-3">
              <input type="text" className="form-control form-control-lg" name='lname' placeholder='Last Name' id="lname" />
            </div>
            <div className="col-md-5 mb-3">
              <input type="email" className="form-control form-control-lg" name='email' placeholder='Email' id="email" />
            </div>
            <div className="col-md-5 mb-3">
              <input type="number" className="form-control form-control-lg" name='phnumber' placeholder='Phone Number' id="phnumber" />
            </div>
            <div className="col-md-10 col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="massage" style={{height: "100px"}}></textarea>
                <label className='text_lable' htmlFor="massage">Comments</label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
