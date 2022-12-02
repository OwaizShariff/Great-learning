import React from 'react';
import FacebookLogo from '../Images/FacebookLogo.png';
import InstaLogo from '../Images/InstaLogo.png';
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer-container'>
        <div>
            <img className='social-logo' src={FacebookLogo} alt='FacebookLogo' />
            <img className='social-logo' src={InstaLogo} alt='InstaLogo' />
        </div>
        <div>
            <p>EmailUs</p>
            <p>ContentUs</p>
        </div>
        </div>
    </div>
  )
}

export default Footer