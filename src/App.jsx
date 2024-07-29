import { Routes } from 'react-dom'
import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Content from "./components/Contant/Contant"
import Button from "./components/Button/Button"
import Home from './pages/Home/Home'

function App() {
  return (
  <>
  <Navbar/>
  <Content/>
  <Button/>
  {/* <Routes>
    <Route path='/' element={<Home/>} />
  </Routes> */}
  </>
  )
}

export default App
