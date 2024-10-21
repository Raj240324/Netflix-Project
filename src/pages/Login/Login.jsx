import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")



  return (
    <div className='main-container'>
      <img src={logo} alt="" style={{width:150}} />
      <div className="container">
        <h2>{signState}</h2>
        <div className="input-container">
          {signState === "Sign Up" ? <input type="text"  placeholder='Enter Your Name'/> : <></>}
          
          <input type="email"  placeholder='Enter Your Email'/>
          <input type="password"  placeholder='Enter Password'/>
          <button  className='sign-btn'>{signState}</button>
        </div>
        <div className='form-help'>
          <div className='remember'>
            <input type="checkbox" />
            <label htmlFor="checkbox">Remember Me</label>

          </div>
          <p>Need help?</p>

        </div>
        <div className='sign-content'>
          {signState === "Sign In" ? <p>New to Netflix?  <span onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p> : <p>Already have Account?  <span onClick={()=>setSignState("Sign In")}>Sign In Now</span></p>}
          
          

        </div>

      </div>

      
    </div>
  )
}

export default Login
