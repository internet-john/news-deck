import React from 'react';

import Header from './header';
import ArticlesList from './articles/articlesList';
import Footer from './footer';

import '../styles/newsDeckApp.css';

const NewsDeckApp = () => {
  return (
    <div className="newsDeckApp">
      <Header />
      <ArticlesList />
      <Footer />
    </div>
  );
};

export default NewsDeckApp();
