import React from 'react';
import ArticlesList from './ArticlesList';

const NewArticles = () => {
  return (
    <div className='new-articles'>
        <h2 className='new-articles__title'>New</h2>
        <ArticlesList />
    </div>
  )
}

export default NewArticles