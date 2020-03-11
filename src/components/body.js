import React from "react";

const getArticles = () => {
  const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=d526c9dabde84092bc5e4f22f06f1173`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};

const Body = () => {
  return <div>articles</div>;
};

export default Body;
