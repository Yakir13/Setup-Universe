import React, { useState } from 'react'
import './Navbar.css'

function Navbar(){
    return(
    <header className="header">
        <a href="/" class="logo"><span>Setup</span> Universe</a>
        <nav class="navbar">
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Products">Products</a>
            <a href="/Contact">Contact</a>
        </nav>
    </header>
    )
}
export default Navbar