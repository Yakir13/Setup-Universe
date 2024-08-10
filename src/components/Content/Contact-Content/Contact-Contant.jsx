import React from 'react'
import './Contact-Contant.css'

function ContactContent(){
    return(
    <div className="submit-form">
        <div className="contact-header">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi tenetur sequi iusto enim minima ipsa repudiandae exercitationem, repellendus soluta totam.</p>
        </div>
        <form action="">
            <h3>Send Message</h3>
            <div className="input-box">
                <label htmlFor="">Name: </label>
                <input type="text" className="input" placeholder='Enter your name...' />
            </div>
            <div className="input-box">
                <label htmlFor="">Email: </label>
                <input type="email" className="input" placeholder='Enter your email...' />
            </div>
            <div className="input-box">
                <label htmlFor="">Phone: </label>
                <input type="tel" className="input" placeholder='Enter your phone...' />
            </div>
            <div className="input-box">
                {/* <label htmlFor="">Type Your Message: </label> */}
                <textarea required="required" rows="10" cols="50" placeholder='Type Your Message...'></textarea>
            </div>
            <input className="submit" type="submit" value="Submit"  />
        </form>
    </div>
    )
}

export default ContactContent