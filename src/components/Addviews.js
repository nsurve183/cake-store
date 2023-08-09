

import React, {useContext} from 'react'
import '../scss/userviews/userviews.css'
import { useFormik } from 'formik'
import { userViewSchema } from './Schemas'
import CakeContext from '../context/cakes/CakeContext'
import { useNavigate } from 'react-router-dom'


const initialValues = {
    name: "",
    description: ""
  }

const Addviews = () => {
    const context = useContext(CakeContext);
    const {addUserViews} = context

    const navigate = useNavigate()

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =  useFormik({
        initialValues: initialValues,
        validationSchema: userViewSchema,
        onSubmit: (values, actions) => {
          addUserViews(values.name, values.description)
          actions.resetForm();
          alert('Thank You For Your Reply')
          navigate('/')
        }
      })
  return (
    <div>
        <div className="user_views mt-lg-5 mt-4 mb-4">
        <div className="container">
            <div className="row g-3 d-flex justify-content-center align-items-center  text-center">
            <div className="col-lg-5 col-md-8 col-sm-10 col-11 mb-3">
              <div className="card text-center">
                <div className="card-header bg-transparent border-0 px-0 py-0">
                  <div className="user_icon"><img src="/images/p6.png" className='card-img-top' alt="" /></div>
                </div>
                <div className="card-body">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12">
                      <h5 className="card-title user_view_title">Add Views</h5>
                    </div>
                   <div className="col-12 mt-3">
                   <form method='POST' onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label text-start d-block">User Name</label>
                        <input type="text" className="form-control" name='name' id="name" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                        {(errors.name && touched.name)? <small className='error text-start mt-1'>{errors.name}</small> : null}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label text-start d-block"> Description</label>
                        <input type="description" className="form-control" id="description"  name='description' onChange={handleChange} onBlur={handleBlur} value={values.description}/>
                        {(errors.description && touched.description)? <small className='error text-start mt-1'>{errors.description}</small> : null}
                      </div>
                      <button type='submit' className='btn mt-3'>Submit</button>
                   </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Addviews
