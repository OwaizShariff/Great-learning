import React from 'react';
import './Header.css';
import { useState } from 'react';
import { Modal } from 'antd';
import BannerLogo from '../Images/tech-era-logo.png'
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
        <div className='header-div'>
          <div className='header-logo-btn'>
            <img className='logo' src={BannerLogo} alt='logo' />
              <button className='reg-btn'><a href='https://forms.gle/8iLax177LJWdQvDBA' target="_blank">Sign Up/Register</a></button>
          </div>
            <div className='objective'>
              <h1>Welcome to Edu Tech!</h1>
              <br></br>
              <p>We help students to land on their dream job by developing there skills and knowledge based on IT Market
              </p>
              <p>We teach the skills starting from basic to dept.
              We help in cracking interviews and guide you towards cracking all the interview rounds.
              </p>
              <p>We will help individual students to complete your own projects after learning the development skills.
              </p>
            </div>
        </div>
        <div className='modal-container'>
        <Modal title="Enter Details to Register" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         
      </Modal>
      </div>
    </div>
  )
}

export default Header