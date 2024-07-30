import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Content from "./components/Content/Home-Content"
import Button from "./components/Button/Home-Button"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Products from "./pages/Products/Products"
import Contact from "./pages/Contact/Contact"


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
