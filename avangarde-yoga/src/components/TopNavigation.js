import React from 'react';
import './TopNavigation.css';
import logo from './logo.png'

const TopNavigation = props => (
    <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="links">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>GALLERY</p>
            <p>BLOG</p>
            <p>CONTACT</p>
        </div>
    </nav>
)

export default TopNavigation