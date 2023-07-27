import React, { useContext, useState } from 'react'
import Alert from './Alert';
import '../scss/contact/contact.css'
import CakeContext from '../context/cakes/CakeContext';


const Contact = () => {
  const context = useContext(CakeContext);

  const {addContactUser, showAlert} = context

  const [contactVal, setContactVal] = useState({fname: "", lname: "", email: "", phnumber: "", massage: ""})

  const handleContact = (e) => {
    e.preventDefault();
    addContactUser(contactVal.fname, contactVal.lname, contactVal.email, contactVal.phnumber, contactVal.massage)
    setContactVal({fname: "", lname: "", email: "", phnumber: "", massage: ""})
    showAlert('We Will Contact You', 'success')
  }

  

  const onchange = (event) => {
    setContactVal({...contactVal, [event.target.name] : event.target.value})
  }
  return (
    <div>
      <div className="contactsection mt-lg-5 mt-4 mb-4">
        <h1 className='contact_title mb-4 '>Contact Us</h1>
        <div className="container">
        <div className="row g-3 d-flex justify-content-center align-items-center ">
        <div className="col-md-10 col-12 mt-0 mb-0">
          <Alert />
          </div>
        </div>
          <form method='POST' className="row g-3 d-flex justify-content-center align-items-center  text-center">
         
            <div className="col-md-5 mb-3">
              <input type="text" className="form-control form-control-lg" name='fname' placeholder='First Name' id="fname" onChange={onchange} value={contactVal.fname} required/>
            </div>
            <div className="col-md-5 mb-3">
              <input type="text" className="form-control form-control-lg" name='lname' placeholder='Last Name' id="lname" onChange={onchange}  value={contactVal.lname} required/>
            </div>
            <div className="col-md-5 mb-3">
              <input type="email" className="form-control form-control-lg" name='email' placeholder='Email' id="email" onChange={onchange}  value={contactVal.email} required/>
            </div>
            <div className="col-md-5 mb-3">
              <input type="number" className="form-control form-control-lg" name='phnumber' placeholder='Phone Number' id="phnumber" onChange={onchange}  value={contactVal.phnumber} required/>
            </div>
            <div className="col-md-10 col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" name='massage' placeholder="Leave a comment here" id="massage"  onChange={onchange}  value={contactVal.massage} style={{height: "100px"}} required></textarea>
                <label className='text_lable' htmlFor="massage">Comments</label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn" onClick={handleContact}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
