import React from 'react';
import img from './assets/images/image-web-3-desktop.jpg';

const MainBlock = () => {
  return (
    <div className='main-block'>
            <img src={img} alt="web 3.0 illustration" className='main-block__img'/>
            <div className="main-block__description">
            <h1 className='main-block__title'>The Bright Future of <br /> Web 3.0?</h1>
            <div className="main-block__text-wrapper">
                <p className='main-block__text'>  We dive into the next evolution of the web that claims to the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <a href="#" className='main-block__link'>Read more</a>
            </div>
            </div>
        </div>
  )
}

export default MainBlock