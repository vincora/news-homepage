import React from 'react';
import './NewArticlesList.scss';

const NewArticlesList = () => {
  return (
    <ul className='articles-list'>
        <li className='articles-list__item'>
            <a href="">
            <h3 className='articles-list__item-title'>Hydrogen VS Electric Cars</h3> </a>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </li>
        <li className='articles-list__item'>
            <a href="">
            <h3 className='articles-list__item-title'>The Downsides of AI Artistry</h3>
            </a>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </li>
        <li className='articles-list__item'>
            <a href="">
            <h3 className='articles-list__item-title'>Is VC Funding Drying Up?</h3>
            </a>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </li>
    </ul>
  )
}

export default NewArticlesList