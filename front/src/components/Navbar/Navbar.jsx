import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './style.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='logo'>uevents</Link>
      <div className='navbar__panel'>
        <NavLink to="/" className='navbar__item'>HOME</NavLink>
        <NavLink to="/formats" className='navbar__item'>FORMATS</NavLink>
        <NavLink to="/themes" className='navbar__item'>THEMES</NavLink>
      </div>
      <div className='navbar__panel'>
        <NavLink to="/login" className='navbar__login'>LOGIN</NavLink>
        <NavLink to="/signup" className='navbar__signup'>SIGNUP</NavLink>
      </div>
    </div>
  )
}

export default Navbar