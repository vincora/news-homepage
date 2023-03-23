import React from 'react';
import retro from './assets/images/image-retro-pcs.jpg';
import laptops from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';
import Article from './Article.js';
import './BottomSection.scss';

const arr = [
    {img: retro, number: '01', title: 'Reviving Retro PCs', text: 'What happens when old PCs are given modern upgrades?'},
    {img: laptops, number: '02', title: 'Top 10 Laptops of 2022', text: 'Our best picks for various needs and budgets.'},
    {img: gaming, number: '03', title: 'The Growth of Gaming', text: 'How the pandemic has sparked fresh opportunities.'}
]

const BottomSection = () => {

  return (
    <section className='bottom-section'>
        {arr.map((item) => 
            (<Article
            img={item.img}
            number={item.number}
            title={item.title}
            text={item.text}
            key={item.number}
            />)
        )}
    </section>
  )
}

export default BottomSection