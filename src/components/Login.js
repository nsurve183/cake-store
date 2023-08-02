

import React, {useState } from 'react'
import '../scss/login/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const host = "http://localhost:5000";
  const navigate = useNavigate();

  const  [creadential, setCredential] = useState({username: "", password: ""});

  const onchange = (e) => {
    setCredential({...creadential, [e.target.name]: e.target.value})
  }

  const handlechange = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: creadential.username, password: creadential.password})
    })
    const json = await response.json()

    if(json.authtoken){
      localStorage.setItem('token', json.authtoken)
      alert('Login Successfull')
      navigate('/')
    }else{
      alert("Invalid Credentials")
      navigate('/login')
    }
  }
  return (
    <div>
          <div className="loginsection mt-lg-5 mt-4 mb-4">
        <div className="container">
            <div className="row g-3 d-flex justify-content-center align-items-center  text-center">
            <div className="col-lg-5 col-md-8 col-sm-10 col-12 mb-3">
              <div className="card text-center">
                <div className="card-header bg-transparent border-0 px-0 py-0">
                  <div className="user_icon"><img src="/images/userimage.jpg" className='img-fluid' alt="" /></div>
                </div>
                <div className="card-body">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12">
                      <h5 className="card-title login_title">Log In</h5>
                    </div>
                    <div className="col-12">
                    </div>
                   <div className="col-12 mt-3">
                   <form method='POST' onSubmit={handlechange}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label text-start d-block">User Name</label>
                        <input type="text" className="form-control" name='username' id="username" value={creadential.username} onChange={onchange}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label text-start d-block">User Password</label>
                        <input type="password" className="form-control" id="password"  name='password' value={creadential.password}  onChange={onchange}/>
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

export default Login
