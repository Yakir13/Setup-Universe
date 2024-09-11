import React from "react";
import './Contact-Form.css'

function ContactForm(){
    return(
    <form action="">
        <h3>Send Message</h3>
        <div className="input-box">
            <i class="fa-solid fa-user"></i>
            <input type="text" className="input" placeholder='Enter your name...' />
        </div>
        <div className="input-box">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" className="input" placeholder='Enter your email...' />
        </div>
        <div className="input-box">
            <i class="fa-solid fa-phone"></i>
            <input type="tel" className="input" placeholder='Enter your phone...' />
        </div>
        <div className="input-box"> 
            <textarea required="required" rows="10" cols="50" placeholder='Type Your Message...'></textarea>
        </div>
        <input className="submit" type="submit" value="Submit"  />
    </form>
    )
}

export default ContactForm