import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import './style.scss';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    return (
        <div className='navbar'>
            <Link to="/" className='logo'>uevents</Link>
            <div className='navbar__panel'>
                <NavLink to="/" className='navbar__item'>HOME</NavLink>
                {isAuthenticated ? (
                    <>
                        {/* <NavLink to="/formats" className='navbar__item'>FORMATS</NavLink>
            <NavLink to="/themes" className='navbar__item'>THEMES</NavLink> */}

                        <NavLink to="/create" className='navbar__item'>Create Event</NavLink>
                        <NavLink to="/profile" className='navbar__item'>Profile</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className='navbar__login'>LOGIN</NavLink>
                        <NavLink to="/signup" className='navbar__signup'>SIGNUP</NavLink>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;