import React from 'react';
import './Header.css';
import { useState } from 'react';
import { Modal } from 'antd';

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
            <img className='logo' src='https://t3.ftcdn.net/jpg/03/92/80/46/360_F_392804645_tUQxo5EgPXvFGxn5OQguX1BiYlI6lCOV.jpg' alt='logo' />
              <button className='reg-btn' onClick={showModal}>Sign Up/Register</button>
          </div>
            <div className='objective'>
              <h1>Welcome to Great Learning!</h1>
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
          <form>
        <div className='name-container'>
          <p className='form-label'>Name :</p>
          <input className='input-fields' />
        </div>
        <div className='name-container'>
          <p className='form-label'>Email :</p>
          <input className='input-fields' />
        </div>
        <div className='name-container'>
          <p className='form-label'>Mobile No :</p>
          <input className='input-fields' />
        </div>
        <div className='name-container'>
          <p className='form-label'>Alternate No :</p>
          <input className='input-fields' />
        </div>
        <div className='name-container'>
          <p className='form-label'>State :</p>
          <input className='input-fields' />
        </div>
        <div  className='name-container'>
          <p className='form-label'>City :</p>
          <input className='input-fields' />
        </div>
        <div className='name-container'>
          <p className='form-label'>Country :</p>
          <input className='input-fields' />
        </div>
        <div  className='name-container'>
          <p className='form-label'>College Passed Year :</p>
          <input className='input-fields' />
        </div>
        <div className='name-container'>
          <p className='form-label'>Years of Experience :</p>
          <input className='input-fields' />
        </div>
        <div className='buttons-container'>
          <button className='submit-button' type='submit'>Sumbit</button>
          <button className='submit-button' type='reset'>Clear</button>
        </div>
        </form>
      </Modal>
      </div>
    </div>
  )
}

export default Header