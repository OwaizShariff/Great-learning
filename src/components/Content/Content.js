import React from 'react'
import './Content.css'
import BannerOne from '../Images/banner-one.png'
import WebDev from '../Images/WebDev.jpg'
import Banner from '../Images/banner.png'
import Team from '../Team/Team';
import Skills from '../Skills/Skills';

function Content() {
  return (
    <div className=''>
      <Skills />
    <div className='banner'>
      <div>
          <img className='mob-banner' src={BannerOne} alt='bannerOne' />
          <img className='desktop-banner' src={Banner} alt='bannerOne' />
          </div>
        <div className='banner-content'>
        <h1 className='heading'>How does these skills help you in your career?</h1>
        <br></br>
        <ul>       
                <li>These skills are booming in the market since 2010</li>
                <li>These skills are for Web development,Which has high scope in the market.</li>
                <li>As you all know IT market gives a huge amount and career growth for developers</li>
                <li>Also lot of software developers are earning more than 12+ LPA.</li>
                <li>If you don’t want to be a developer then this course is not for you.</li>
                <li>You can have many opportunities to get your jobs  in dream companies like Google, Amazon, Meta etc…</li>
        </ul>
        </div>
    </div>

    <div className='banner1'>
      <div className='banner-one'>
        <img className='banner-1' src={WebDev} alt='banner1' />
      </div>
      <div className='banner-content1'>
      <h1 className='heading'>How do we help you in cracking the Interviews?</h1>
      <br></br>
      <ul>
        <li>We will provide the list of basic questions which will help you in cracking the first round of interview which will be the  Written/Aptitude test</li>
        <li>We will further take a mock interview for each person individually where it’ll help in building the confidence in technical round</li>
        <li>We will prepare you for the 3rd round which will be HR round where you’ll be asked about yourself, and we will be guiding you what to tell to the interviewer.</li>
      </ul>
      </div>
    </div>
    <div>
      <Team/>
    </div>
</div>
  )
}

export default Content