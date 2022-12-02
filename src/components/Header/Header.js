import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
        <div className='header-div'>
          <div className='header-logo-btn'>
            <img className='logo' src='https://t3.ftcdn.net/jpg/03/92/80/46/360_F_392804645_tUQxo5EgPXvFGxn5OQguX1BiYlI6lCOV.jpg' alt='logo' />
            <button className='reg-btn'>Sign Up/Register</button>
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
    </div>
  )
}

export default Header