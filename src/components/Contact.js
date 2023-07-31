import React, { useContext } from 'react'
import '../scss/contact/contact.css'
import CakeContext from '../context/cakes/CakeContext';
import { useFormik } from 'formik';
import {contactSchemas} from './Schemas/'


const initialValues = {
  fname: '',
  lname: '',
  email: '',
  phnumber: '',
  massage: ''
}

const Contact = () => {
  const context = useContext(CakeContext);
  const {addContactUser, } = context;

  // form validation useing formik and yup
 const {values, errors, touched, handleBlur, handleChange, handleSubmit} =  useFormik({
    initialValues: initialValues,
    validationSchema: contactSchemas,
    onSubmit: (values, actions) => {
      addContactUser(values.fname, values.lname, values.email, values.phnumber, values.massage);
      actions.resetForm();
      alert('We Will Contact Soon')
    }
  })
  
  

 
  // const handleContact = (e) => {
  //   e.preventDefault();
  //   addContactUser(contactVal.fname, contactVal.lname, contactVal.email, contactVal.phnumber, contactVal.massage)
  //   setContactVal({fname: "", lname: "", email: "", phnumber: "", massage: ""})
  //   // showAlert('We Will Contact You', 'success')
  // }

  

  // const onchange = (event) => {
  //   setContactVal({...contactVal, [event.target.name] : event.target.value})
  // }
  return (
    <div>
      <div className="contactsection mt-lg-5 mt-4 mb-4">
        <h1 className='contact_title mb-4 '>Contact Us</h1>
        <div className="container">
          <form method='POST' onSubmit={handleSubmit} className="row g-3 d-flex justify-content-center align-items-center  text-center">
            <div className="col-md-5 mb-3">
              <input type="text" className="form-control form-control-lg" name='fname' placeholder='First Name' id="fname" onChange={handleChange} onBlur={handleBlur}  value={values.fname}/>
              {(errors.fname && touched.fname)? <h6 className='error text-start mt-1'>{errors.fname}</h6> : null}
            </div>
            <div className="col-md-5 mb-3">
              <input type="text" className="form-control form-control-lg" name='lname' placeholder='Last Name' id="lname" onChange={handleChange} onBlur={handleBlur}  value={values.lname} />
              {(errors.lname && touched.lname)? <h6 className='error text-start mt-1'>{errors.lname}</h6> : null}
            </div>
            <div className="col-md-5 mb-3">
              <input type="email" className="form-control form-control-lg" name='email' placeholder='Email' id="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
              {(errors.email && touched.email)? <h6 className='error text-start mt-1'>{errors.email}</h6> : null}
            </div>
            <div className="col-md-5 mb-3">
              <input type="number" className="form-control form-control-lg" name='phnumber' placeholder='Phone Number' id="phnumber" onChange={handleChange} onBlur={handleBlur} value={values.phnumber}/>
              {(errors.phnumber && touched.phnumber)? <h6 className='error text-start mt-1'>{errors.phnumber}</h6> : null}
            </div>
            <div className="col-md-10 col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" name='massage' placeholder="Leave a comment here" id="massage"  style={{height: "100px"}} onChange={handleChange} onBlur={handleBlur}  value={values.massage}></textarea>
                {(errors.massage && touched.massage)? <h6 className='error text-start mt-1'>{errors.massage}</h6> : null}
                <label className='text_lable' htmlFor="massage">Comments</label>
              </div>
              <div className="col-md-10 col-12 mb-3">
              <button type="submit" className="btn mt-5">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
