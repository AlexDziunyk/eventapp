import React from 'react'
import './style.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>uevents</h1>
      <div className='navbar__panel'>
        <div className='navbar__item'>HOME</div>
        <div className='navbar__item'>FORMATS</div>
        <div className='navbar__item'>THEMES</div>
      </div>
      <div className='navbar__panel'>
        <div className='navbar__login'>LOGIN</div>
        <div className='navbar__signup'>SIGNUP</div>
      </div>
    </div>
  )
}

export default Navbar