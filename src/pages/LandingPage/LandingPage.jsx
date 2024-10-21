import React, { useState } from 'react'
import './LandingPage.css'
import logo from '../../assets/logo.png'



const LandingPage = () => {




  return (

    <>
    <div className='landing-page'>

        

        <div className="landing-page-nav">
            <img className='logo' src={logo} alt="" />
     
           
            <div className='right-nav'>
               
                    <select className='language' name="language" id="language">
                        <option value="English">English</option>
                        <option value="Tamil">Tamil</option>
                    </select>
             
                <button className='sign-in-btn'>Sign In</button>
            </div>
        </div>

        <div className='center-content'>
            <h3>Unlimited movies, TV shows</h3> 
            <h3>and more</h3>
            <h6>Starts at ₹149. Cancel at any time</h6>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            

            <div className='input'>
                <input type="email" placeholder='Email address' />
                <button className='start-btn'>Get Started </button>
            </div>

         


        </div>

        <div className='bottom-arc'></div>
        
      
    </div>

   

    </>

  )
}

export default LandingPage
