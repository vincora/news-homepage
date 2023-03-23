import React from 'react';
import logo from './assets/images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <a href='#' className="header__logo"><img src={logo} alt="logo" /></a>
        <nav>
        <ul className='header__nav'>
            <li className='header__nav-item'><a href="#">Home</a></li>
            <li className='header__nav-item'><a href="#">New</a></li>
            <li className='header__nav-item'><a href="#">Popular</a></li>
            <li className='header__nav-item'><a href="#">Trending</a></li>
            <li className='header__nav-item'><a href="#">Categories</a></li>
        </ul>
        </nav>
    </header>
  )
}

export default Header