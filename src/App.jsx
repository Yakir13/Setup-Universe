import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"


function App() {
  return (
  <>
  <Navbar/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Products' element={<Products/>} />
    <Route path='/Contact' element={<Contact/>} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
