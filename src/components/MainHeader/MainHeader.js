import React from 'react'
import BannerLogo from '../Images/edu-tech-logo.png'
import './MainHeader.css'
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import {BarsOutlined} from '@ant-design/icons';

const MainHeader = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  return (
    <div>
      
    <div className='main-header'>
        <div className='header-logo-btn'>
        <BarsOutlined onClick={showDrawer} className='hamburger' />
            <img className='logo' src={BannerLogo} alt='logo' />
            <ul className='header-click'>
                <p className='home'>Home</p>
                <p className='home'>Course</p>
                <p className='home'>Team</p>
                <p className='home'><a href='https://forms.gle/8iLax177LJWdQvDBA' rel="noopener noreferrer" target="_blank">Sign Up/Register</a></p>
            </ul>
          </div>
          <div className='drawer'>
          <Drawer placement="left" onClose={onClose} open={open}>
        <p>Home</p>
        <p>Course</p>
        <p>Team</p>
        <p><a href='https://forms.gle/8iLax177LJWdQvDBA' rel="noopener noreferrer" className='hamburger-reg-btn' target="_blank">Sign Up/Register</a></p>
      </Drawer>
      </div>
    </div>
    </div>
  )
}

export default MainHeader