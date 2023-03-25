import React, {useState} from 'react';
import logo from './assets/images/logo.svg';
import icon from './assets/images/icon-menu.svg';
import close from './assets/images/icon-menu-close.svg';
import './Header.scss';
import cn from 'classnames';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(isOpen => !isOpen);
  };

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
          <div className={cn('burger-menu', {'burger-menu_open':isOpen})}>
            <div className="burger-menu__btn" onClick={toggleClass}>
              <img src={icon} alt="" className='burger-menu__icon burger-menu__icon-open'/>
              <img src={close} alt="" className='burger-menu__icon burger-menu__icon-close'/>
            </div>
            <div className='burger-menu__wrapper' onClick={toggleClass}></div>
            <div  className='burger-menu__body'>
              <ul className='burger-menu__list'>
                <li className='burger-menu__item'><a href="#">Home</a></li>
                <li className='burger-menu__item'><a href="#">New</a></li>
                <li className='burger-menu__item'><a href="#">Popular</a></li>
                <li className='burger-menu__item'><a href="#">Trending</a></li>
                <li className='burger-menu__item'><a href="#">Categories</a></li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header