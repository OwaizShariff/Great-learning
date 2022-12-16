import React from 'react';
import FacebookLogo from '../Images/FacebookLogo.png';
import WhatsappLogo from '../Images/WhatsApp.png'
import InstaLogo from '../Images/InstaLogo.png';
import './Footer.css'
import {Link} from 'react-scroll'

function Footer() {
  return (
    <div>
        <div className='footer-container'>
        <div>
            <img className='social-logo' src={FacebookLogo} alt='FacebookLogo' />
            <img className='social-logo' src={InstaLogo} alt='InstaLogo' />
            <a  href="https://api.whatsapp.com/send?phone=+8618392962&text=Hello%21%21%21%20%20%20owaiz." target="_blank" rel="noreferrer"><img className='social-logo' src={WhatsappLogo} alt='InstaLogo' /></a>
        </div>
        <div  className='contact'>
          <p className='back-to-top'><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></p>
          <a href="mailto:arwaaedu@gmail.com">Email Us</a>
        </div>
        </div>
    </div>
  )
}

export default Footer