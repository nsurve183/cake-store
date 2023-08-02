

import React from 'react';
import { AuthContext } from './CakeContext';
import { useState } from 'react';

const AuthState = (props) => {
    const host = "http://localhost:5000";   

    const [auth, setauth] = useState('Nikhil');

    const userSignUp = async (name, username, email, password) => {
        const repsonse = await fetch(`${host}/api/auth/createusers`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({name, username, email, password})
        })
        const signupdata = await repsonse.json();
        setauth(auth.concat(signupdata))

        if(signupdata.authtoken){
          localStorage.setItem('token', signupdata.authtoken);
        }else{
          alert('Please Enter A Valid Detailes')
        }
    }


  return (
    <div>
      <AuthContext.Provider value={{auth, userSignUp}}>
            {props.children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthState
