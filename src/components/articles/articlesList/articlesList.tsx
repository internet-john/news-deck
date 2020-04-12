import React from 'react';
import { useSelector } from 'react-redux';

import { ArticlesListEntry } from '../article';
import { ArticlesListEntryProps } from '../../../types';

const ArticlesList = () => {
  const articles: Array<object> = useSelector((state) => state.articles);
  const loading: boolean = useSelector((state) => state.isFetching);

  const featuredArticles = articles.splice(0, 3);
  return loading ? (
    <section className="newsDeckApp__articles-list--loading"></section>
  ) : (
    <section className="newsDeckApp__articles-list">
      <section className="newsDeckApp__articles-list--featured">
        {featuredArticles &&
          featuredArticles.map((article: ArticlesListEntryProps) => (
            <ArticlesListEntry
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              author={article.author}
              source={article.source}
              url={article.url}
            />
          ))}
      </section>
      <section className="newsDeckApp__articles-list--other">
        {articles &&
          articles.map((article: ArticlesListEntryProps) => (
            <ArticlesListEntry
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              author={article.author}
              source={article.source}
              url={article.url}
            />
          ))}
      </section>
    </section>
  );
};

export default ArticlesList;
