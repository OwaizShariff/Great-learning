import React from 'react';
import './Team.css';
import LinkedIn from '../Images/linkedin-custum.png'
import GitHub from '../Images/github.png'
import ReshmaPic from '../Images/reshma.png'
import AfshanPic from '../Images/afshan.png'
import OwaizPic from '../Images/owaiz.png.jpg'
import ShaziyaPic from '../Images/shaziya.jpg'
import { Fade } from "react-awesome-reveal";
const Team = () => {
    return (
        <div>
            <div id='team' className='team-container'>
                <h1 className='heading'>Our Team</h1>
                <div className='team-main'>
                    <div className='team-cards'>
                        <img className='cardos' src={OwaizPic} alt="OwaizImage" />
                        
                        <p className='name'>Owaiz Shariff</p>
                        <p>Software Engineer</p>
                        <p>Full-Stack Developer</p>
                        <div className='social-links-container'>
                            <a href='https://www.linkedin.com/in/owaiz-shariff/' target='_blank'><img className='linkedin-github-img' src={LinkedIn} alt='linkedin' /></a>
                            <a href='https://github.com/OwaizShariff' target='_blank'><img className='linkedin-github-img' src={GitHub} alt='github' /></a>
                        </div>
                    </div>
                    <div className='team-cards'>
                        <img className='cards' src={AfshanPic} alt="AfshanImage" />
                        <p className='name'>Afshan Khanum</p>
                        <p>Software Engineer</p>
                        <p>Front-End Developer</p>
                        <div className='social-links-container'>
                            <a href='https://www.linkedin.com/in/afshan-khanum/'  target='_blank'><img className='linkedin-github-img' src={LinkedIn} alt='linkedin' /></a>
                            <a href='https://github.com/afshakhanum' target='_blank'><img className='linkedin-github-img' src={GitHub} alt='github' /></a>
                        </div>
                    </div>
                    <div className='team-cards'>
                        <img className='cards' src={ReshmaPic} alt="ReshmaImage" />
                        <p className='name'>Reshma Noorian</p>
                        <p>Software Engineer</p>
                        <p>Front-End Developer</p>
                        <div className='social-links-container'>
                            <a href='https://www.linkedin.com/in/reshma-noorain/' target='_blank'><img className='linkedin-github-img' src={LinkedIn} alt='linkedin' /></a>
                            <a href='https://github.com/reshmanoorain' target='_blank'><img className='linkedin-github-img' src={GitHub} alt='github' /></a>
                        </div>
                    </div>
                    <div className='team-cards'>
                        <img className='cards' src={ShaziyaPic} alt="ShaziyaImage" />
                        <p className='name'>Shazia Afreen</p>
                        <p>Software Engineer</p>
                        <p>Back-End Developer</p>
                        <div className='social-links-container'>
                            <img className='linkedin-github-img' src={LinkedIn} alt='linkedin' />
                            <img className='linkedin-github-img' src={GitHub} alt='github' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Team