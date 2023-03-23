import React from 'react';
import MainBlock from './MainBlock';
import NewArticles from './NewArticles';


const MainSection = () => {
  return (
    <section className='main-section'>
        <MainBlock />
        <NewArticles />
    </section>
  )
}

export default MainSection