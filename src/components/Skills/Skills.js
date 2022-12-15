import React from 'react'
import './Skills.css'
import Marquee from "react-fast-marquee";
import HtmlLogo from '../Images/html-logo.jpg';
import CssLogo from '../Images/css-logo.jpg';
import JsLogo from '../Images/js-logo.jpg';
import ReactLogo from '../Images/React-logo.png';
import GitLogo from '../Images/Git-logo.png'
import GitHub from '../Images/github.png'
import VsCodeLogo from '../Images/Visual-Studio-Logo.png'
import NpmLogo from '../Images/npm.png'
import NetlifyLogo from '../Images/Netlify-Logo.png'
const Skills = () => {
  return (
    <div>
        <div className='container'>
        <div className='skills'>
            <h1>Skills We Teach</h1>
            <Marquee 
            speed={120} 
            pauseOnHover={true}>
              <div className='skill-img'>
                <img className='html-logo' src={HtmlLogo} alt='html-logo' />
              </div>
              <div className='skill-img'>
              <img className='css-logo' src={CssLogo} alt='css-logo' />
              </div>
              <div className='skill-img'>
              <img className='js-logo' src={JsLogo} alt='js-logo' />
              </div>
              <div className='skill-img'>
              <img className='react-logo' src={ReactLogo} alt='react-logo' />
              </div>
              <div className='skill-img'>
              <img className='git-logo' src={GitLogo} alt='git-logo' />
              </div>
              <div className='skill-img'>
              <img className='github-logo' src={GitHub} alt='' />
              </div>
              <div className='skill-img'>
              <img className='vs-code-logo' src={VsCodeLogo} alt='vs-code-logo' />
              </div>
              <div className='skill-img'>
              <img className='npm-logo' src={NpmLogo} alt='npm-logo' />
              </div>
              <div className='skill-img'>
              <img className='netlify-logo' src={NetlifyLogo} alt='' />
              </div>
            
            </Marquee>



            
           
            
        </div>
    </div>
    </div>
  )
}

export default Skills