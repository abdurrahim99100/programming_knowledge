import React from 'react';
import logo from '../../images/Mini_S_ring.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Programming Knowledge</h1>
            <div className='header-item'>
                <a href="">Home</a>
                <a href="">Blog</a>
                <a href="">Service</a>
                <a href="">Support</a>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;