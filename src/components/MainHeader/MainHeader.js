import React from 'react'
import BannerLogo from '../Images/edu-tech-logo.png'
import './MainHeader.css'
import { Drawer } from 'antd';
import { useState } from 'react';
import {MenuOutlined} from '@ant-design/icons';
import {Link} from 'react-scroll'

const MainHeader = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    const onListClick = () => {
      setOpen(false);
    }

  return (
    <div>
    <div id='home' className='main-header'>
        <div className='header-logo-btn'>
        <MenuOutlined onClick={showDrawer} className='hamburger'/>
            <img className='logo' src={BannerLogo} alt='logo' />
            <ul className='header-click'>
                {/* <p className='home'><Link className='home' activeClass="active" to="home" spy={true} smooth={true}>Home</Link></p> */}
                <p ><Link className='home'  to="skills" spy={true} smooth={true}>Skills</Link></p>
                <p ><Link className='home'  to="team" spy={true} smooth={true}>Team</Link></p>
                <p ><a className='home' href='https://forms.gle/8iLax177LJWdQvDBA' rel="noopener noreferrer" target="_blank">Register</a></p>
            </ul>
          </div>
          <div className='drawer'>
          <Drawer placement="left" onClose={onClose} open={open}>
        {/* <p className='hamburger-list'><Link onClick={onListClick} activeClass="active" to="home" spy={true} smooth={true}>Home</Link></p> */}
        <p className='hamburger-list'><Link onClick={onListClick} to="skills" spy={true} smooth={true}>Skills</Link></p>
        <p className='hamburger-list'><Link onClick={onListClick} to="team" spy={true} smooth={true}>Team</Link></p>
        <p className='hamburger-list'><a href='https://forms.gle/8iLax177LJWdQvDBA' rel="noopener noreferrer" target="_blank">Register</a></p>
      </Drawer>
      </div>
    </div>
    </div>
  )
}

export default MainHeader