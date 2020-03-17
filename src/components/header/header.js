import React from 'react';

const Header = () => {
  return (
    <div className="newsDeckApp__header">
      <h1>news-deck</h1>
      <h3>{new Date().toDateString()}</h3>
    </div>
  );
};

export default Header;
