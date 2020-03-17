import React from 'react';
import { useSelector } from 'react-redux';

import ArticlesListEntry from '../article';

const ArticlesList = () => {
  const articles = useSelector(state => state.articles);
  const loading = useSelector(state => state.isFetching);

  const featuredArticles = articles.splice(0, 3);
  return loading ? (
    <div className="newsDeckApp__articles-list--loading"></div>
  ) : (
    <div className="newsDeckApp__articles-list">
      <div className="newsDeckApp__articles-list--featured">
        {featuredArticles &&
          featuredArticles.map(article => (
            <ArticlesListEntry
              key={article.id}
              title={article.title}
              description={article.description}
              author={article.author}
              source={article.source}
              url={article.url}
            />
          ))}
      </div>
      <div className="newsDeckApp__articles-list-buffer"></div>
      <div className="newsDeckApp__articles-list--other">
        {articles &&
          articles.map(article => (
            <ArticlesListEntry
              key={article.id}
              title={article.title}
              description={article.description}
              author={article.author}
              source={article.source}
              url={article.url}
            />
          ))}
      </div>
    </div>
  );
};

export default ArticlesList;
