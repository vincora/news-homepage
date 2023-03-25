import React from 'react';
import './Article.scss';

const Article = ({img, number, title, text}) => {
  return (
    <article className='article'>
        <img src={img} alt="retro pcs" className='article__picture' />
        <div className="article__text-wrapper">
            <div className='article__number'>{number}</div>
            <h3 className='article__title'>{title}</h3>
            <p className='article__text'>{text}</p>
        </div>
    </article>
  )
}

export default Article