import React from 'react';
import { useSelector } from 'react-redux';

import ArticlesListEntry from './articlesListEntry';
// import '../../styles/articlesList';

const ArticlesList = () => {
  const articles = useSelector(state => state.articles);
  const featuredArticles = articles.splice(0, 3);
  return (
    <div className="newsDeckApp__articles-list">
      <div className="newsDeckApp__articles-list--featured">
        {featuredArticles &&
          featuredArticles.map(article => (
            <ArticlesListEntry
              id={article.id}
              title={article.title}
              description={article.description}
              author={article.author}
              source={article.source}
            />
          ))}
      </div>
      <div className="newsDeckApp__articles-list-buffer"></div>
      <div className="newsDeckApp__articles-list--other">
        {articles &&
          articles.map(article => (
            <ArticlesListEntry
              id={article.id}
              title={article.title}
              description={article.description}
              author={article.author}
              source={article.source}
            />
          ))}
      </div>
    </div>
  );
};

export default ArticlesList;
