import React from 'react';
import retro from './assets/images/image-retro-pcs.jpg';
import laptops from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';

const BottomSection = () => {
  return (
    <section className='bottom-section'>
        <article className='article'>
            <img src={retro} alt="retro pcs" className='article__picture' />
            <div className="article__text-wrapper">
                <div className='article__number'>01</div>
                <h3 className='article__title'>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </article>
        <article className='article'>
            <img src={laptops} alt="top 10 laptops" className='article__picture' />
            <div className="article__text-wrapper">
                <div className='article__number'>02</div>
                <h3 className='article__title'>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </article>
        <article className='article'>
            <img src={gaming} alt="gaming growth" className='article__picture'/>
            <div className="atricle__text-wrapper">
                <div className='article__number'>03</div>
                <h3 className='article__title'>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </article>
    </section>
  )
}

export default BottomSection