import React from 'react';

import Header from '../header';
import FilterBar from '../filterBar';
import ArticlesList from '../articles/articlesList';
import Footer from '../footer';

const NewsDeckApp = () => {
  return (
    <div className="newsDeckApp">
      <Header />
      <FilterBar />
      <ArticlesList />
      <Footer />
    </div>
  );
};

export default NewsDeckApp();
