import React from 'react'

const ArticlesList = () => {
  return (
    <ul className='articles-list'>
        <li className='articles-list__item'>
            <a href="">
            <h3 className='articles-list__item-title'>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </a>
        </li>
        <li className='articles-list__item'>
            <a href="">
            <h3 className='articles-list__item-title'>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </a>
        </li>
        <li className='articles-list__item'>
            <a href="">
            <h3 className='articles-list__item-title'>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </a>
        </li>
    </ul>
  )
}

export default ArticlesList