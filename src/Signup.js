import React, { useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import './Login.css'
function Login() {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  return (
  <>
  <div className='maincontainer'>
    <div className="container">
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Signup</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" required />
                </div>
                
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter phone number" required />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your address" required />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your gender" required />
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Create Password" required />
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Confirm Password" required />
                </div>
                <div className="button input-box">
                  <input type="submit" defaultValue="Sumbit"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}

export default Login