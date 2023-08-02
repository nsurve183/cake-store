

import '../scss/singnup/signup.css'
import { useFormik } from 'formik'
import { signupSchema } from './Schemas'
import { useNavigate } from 'react-router-dom'




const initialValues = {
  name: "",
  username: "",
  email: "",
  password: ""
}


const Signup = () => {
  const host = "http://localhost:5000";   

  const navigate = useNavigate()

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    
    onSubmit : async (values, action) => {

      const repsonse = await fetch(`${host}/api/auth/createusers`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({name: values.name, username: values.username, email: values.email, password: values.password})
    })
    const signupdata = await repsonse.json();

    if(signupdata.authtoken){
      localStorage.setItem('token', signupdata.authtoken);
      alert("Sign Up Successfully");
      action.resetForm();
      navigate('/');
    }else{
      alert('Please Enter A Valid Detailes')
    }
    
    }
  })

  return (
    <div>
      <div className="contactsection mt-lg-5 mt-4 mb-4">
        <h1 className='signup_title mb-4 '> </h1>
        <div className="container">
            <div className="row g-3 d-flex justify-content-center align-items-center  text-center">
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 mb-3">
              <div className="card text-center">
                <div className="card-header bg-transparent border-0 px-0 py-0">
                  <div className="user_icon"><img src="/images/userimage.jpg" className='img-fluid' alt="" /></div>
                </div>
                <div className="card-body">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12">
                      <h5 className="card-title signup_title">Sign Up</h5>
                    </div>
                   <div className="col-12 mt-3">
                   <form action="POST" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label text-start d-block">Name</label>
                        <input type="text" className="form-control" id="name" onChange={handleChange} onBlur={handleBlur} value={values.name} name='name'/>
                        {(errors.name && touched.name)? <small className='error text-start mt-1'>{errors.name}</small> : null}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label text-start d-block">User Name</label>
                        <input type="text" className="form-control" name='username' id="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                        {(errors.username && touched.username)? <small className='error text-start mt-1'>{errors.username}</small> : null}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label text-start d-block">User Email</label>
                        <input type="email" className="form-control" id="email"  name='email' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                        {(errors.email && touched.email)? <small className='error text-start mt-1'>{errors.email}</small> : null}
                    
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label text-start d-block">User Password</label>
                        <input type="password" className="form-control" id="password"  name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                        {(errors.password && touched.password)? <small className='error text-start mt-1'>{errors.password}</small> : null}
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

export default Signup
