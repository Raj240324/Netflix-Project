import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login/Login'
import LandingPage from './pages/LandingPage/LandingPage'





const App = () => {
  return (
    <>
    <Routes>

      <Route path='/' element={ <LandingPage />} />
      <Route path='/home' element={ <Home />} />
      <Route path='/login' element={ <Login />} />

    </Routes>
     
    
      
    </>
  )
}

export default App
