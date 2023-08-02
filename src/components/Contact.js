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
  const {addContactUser } = context;

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
  
  

 
  return (
    <div>
      <div className="contactsection mt-lg-5 mt-4 mb-4">
        <h1 className='contact_title mb-4 '>Contact Us</h1>
        <div className="container">
          <form method='POST' onSubmit={handleSubmit} className="row g-3 d-flex justify-content-center align-items-center  text-center">
            <div className="col-md-5 mb-3">
              <input type="text" className="form-control form-control-lg" name='fname' placeholder='First Name' id="fname" onChange={handleChange} onBlur={handleBlur}  value={values.fname}/>
              {(errors.fname && touched.fname)? <small className='error text-start mt-1'>{errors.fname}</small> : null}
            </div>
            <div className="col-md-5 mb-3">
              <input type="text" className="form-control form-control-lg" name='lname' placeholder='Last Name' id="lname" onChange={handleChange} onBlur={handleBlur}  value={values.lname} />
              {(errors.lname && touched.lname)? <small className='error text-start mt-1'>{errors.lname}</small> : null}
            </div>
            <div className="col-md-5 mb-3">
              <input type="email" className="form-control form-control-lg" name='email' placeholder='Email' id="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
              {(errors.email && touched.email)? <small className='error text-start mt-1'>{errors.email}</small> : null}
            </div>
            <div className="col-md-5 mb-3">
              <input type="number" className="form-control form-control-lg" name='phnumber' placeholder='Phone Number' id="phnumber" onChange={handleChange} onBlur={handleBlur} value={values.phnumber}/>
              {(errors.phnumber && touched.phnumber)? <small className='error text-start mt-1 errorStyle'>{errors.phnumber}</small> : null}
            </div>
            <div className="col-md-10 col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" name='massage' placeholder="Leave a comment here" id="massage"  style={{height: "100px"}} onChange={handleChange} onBlur={handleBlur}  value={values.massage}></textarea>

                {(errors.massage && touched.massage)? <small className='error text-start mt-1'>{errors.massage}</small> : null}
                
                <label className='text_lable' htmlFor="massage">Comments</label>
              </div>
            </div>
            <div className="col-md-10 col-12 mb-3">
                <button type="submit" className="btn mt-3">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
