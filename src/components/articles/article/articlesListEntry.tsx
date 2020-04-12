import React from 'react';

import { ArticlesListEntryProps } from '../../../types';

const ArticlesListEntry: React.FC<ArticlesListEntryProps> = (props) => {
  const classNameRoot =
    props.id <= 2
      ? 'newsDeckApp__articles-list-entry--featured'
      : 'newsDeckApp__articles-list-entry';
  return (
    <div key={props.id} className={classNameRoot}>
      <a
        className={`${classNameRoot}-link`}
        target="_blank"
        rel="noopener noreferrer"
        href={props.url}
      >
        <div className={`${classNameRoot}-source`}>{props.source}</div>
        <div className={`${classNameRoot}-title`}>{props.title}</div>
        <div className={`${classNameRoot}-description`}>
          {props.description}
        </div>
        <div className={`${classNameRoot}-author`}>{props.author}</div>
      </a>
    </div>
  );
};

export { ArticlesListEntry, ArticlesListEntryProps };
