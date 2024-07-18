// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin,setshowLogin]=useState(true)
  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
      <div className="app">
        <Navbar setshowLogin={setshowLogin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<Placeorder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
