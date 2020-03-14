import React from 'react';

import '../../styles/articlesListEntry';

const ArticlesListEntry = props => {
  const classNameRoot =
    props.id <= 2
      ? 'newsDeckApp__articles-list-entry--featured'
      : 'newsDeckApp__articles-list-entry';
  return (
    <div key={props.id} className={classNameRoot}>
      <div className={`${classNameRoot}-source`}>{props.source}</div>
      <div className={`${classNameRoot}-title`}>{props.title}</div>
      <div className={`${classNameRoot}-description`}>{props.description}</div>
      <div className={`${classNameRoot}-author`}>{props.author}</div>
    </div>
  );
};

export default ArticlesListEntry;
