import React from 'react';
import NewArticlesList from './NewArticlesList';
import './NewArticles.scss';

const NewArticles = () => {
  return (
    <div className='new-articles'>
        <h2 className='new-articles__title'>New</h2>
        <NewArticlesList />
    </div>
  )
}

export default NewArticles