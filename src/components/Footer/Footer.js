import React from 'react';
import FacebookLogo from '../Images/FacebookLogo.png';
import WhatsappLogo from '../Images/WhatsApp.png'
import InstaLogo from '../Images/InstaLogo.png';
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer-container'>
        <div>
            <img className='social-logo' src={FacebookLogo} alt='FacebookLogo' />
            <img className='social-logo' src={InstaLogo} alt='InstaLogo' />
            <img className='social-logo' src={WhatsappLogo} alt='InstaLogo' />
        </div>
        <div  className='contact'>
           <a href='mailto:www.arwaaedu@gmail.com'>Email Us</a>
          <p>Contact Us</p>
        </div>
        </div>
    </div>
  )
}

export default Footer