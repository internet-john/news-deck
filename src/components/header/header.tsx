import React from 'react';

const Header: React.FC = () => (
  <header className="newsDeckApp__header">
    <h1 className="newsDeckApp__header-text">news-deck</h1>
    <h3 className="newsDeckApp__header-date">{new Date().toDateString()}</h3>
  </header>
);

export default Header;
