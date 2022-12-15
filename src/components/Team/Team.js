import React from 'react';
import './Team.css';
import ReshmaPic from '../Images/reshma.png'
import AfshanPic from '../Images/afshan.png'
import OwaizPic from '../Images/owaiz.png.jpg'
import ShaziyaPic from '../Images/shaziya.jpg'

const Team = () => {
    return (
        <div>
            <div id='team' className='team-container'>
                <h1>Our Team</h1>
                <div className='team-main'>
                    <div className='team-cards'>
                        <img className='cardos' src={OwaizPic} alt="OwaizImage" />
                        <p className='name'>Owaiz Shariff</p>
                        <p>Software Engineer</p>
                        <p>Full-Stack Developer</p>
                        <p>1+ Year of Experience</p>
                        <p>The Retail Insights.</p>
                    </div>
                    <div className='team-cards'>
                        <img className='cards' src={AfshanPic} alt="AfshanImage" />
                        <p className='name'>Afshan Khanum</p>
                        <p>Software Engineer</p>
                        <p>Front-End Developer</p>
                        <p>3+ Years Experience</p>
                        <p>The Retail Insights.</p>
                    </div>
                    <div className='team-cards'>
                        <img className='cards' src={ReshmaPic} alt="ReshmaImage" />
                        <p className='name'>Reshma Noorian</p>
                        <p>Software Engineer</p>
                        <p>Front-End Developer</p>
                        <p>2+ Year Experience</p>
                        <p>Accenture.</p>
                    </div>
                    <div className='team-cards'>
                        <img className='cards' src={ShaziyaPic} alt="ShaziyaImage" />
                        <p className='name'>Shazia Afreen</p>
                        <p>Software Engineer</p>
                        <p>Back-End Developer</p>
                        <p>1+ Year Experience</p>
                        <p>Infosys.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Team