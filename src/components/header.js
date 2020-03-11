import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <h1>news-deck</h1>
      <h3>{new Date().toDateString()}</h3>
    </React.Fragment>
  );
};

export default Header;
