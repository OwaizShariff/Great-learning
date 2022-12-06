import React from 'react';
import './Header.css';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import InputField from '../CommonComponents/InputFields/InputField';

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
          <label>Name</label>
          <br />
          <input className='input-fields' />
        </div>
        <div>
          <label>Email</label>
          <input className='input-fields' />
        </div>
        <div>
          <label>Mobile No.</label>
          <input className='input-fields' />
        </div>
        <div>
          <label>Alternate No.</label>
          <input className='input-fields' />
        </div>
        <div>
          <label>State</label>
          <input className='input-fields' />
        </div>
        <div>
          <label>City</label>
          <input className='input-fields' />
        </div>
        <div>
          <label>Country</label>
          <input className='input-fields' />
        </div>
        <div>
          <label>College Passed Year</label>
          <input className='input-fields' />
        </div>
        <div>
          <label>Years of Experience</label>
          <input className='input-fields' />
        </div>
        <div>
          <button className='submit-button' type='submit'>Sumbit</button>
          <button className='clear-button' type='reset'>Clear</button>
        </div>
        </form>
      </Modal>
      </div>
    </div>
  )
}

export default Header