const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const REQUEST_ARTICLES_SUCCESS = 'REQUEST_ARTICLES_SUCCESS';
const REQUEST_ARTICLES_FAILURE = 'REQUEST_ARTICLES_FAILURE';
const DISPLAY_ARTICLES = 'DISPLAY_ARTICLES';

const requestArticles = () => ({
  type: REQUEST_ARTICLES,
});

const requestArticlesSuccess = () => ({
  type: REQUEST_ARTICLES_SUCCESS,
});

const requestArticlesFailure = error => ({
  type: REQUEST_ARTICLES_FAILURE,
  error,
});

const displayArticles = articles => ({
  type: DISPLAY_ARTICLES,
  articles,
});

const fetchArticles = () => {
  return (dispatch, getState) => {
    if (getState().articles.length === 0) {
      dispatch(requestArticles());
      return fetch(
        `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
      )
        .then(
          response => response.json(),
          error => dispatch(requestArticlesFailure(error))
        )
        .then(data => {
          dispatch(requestArticlesSuccess());
          dispatch(displayArticles(data.articles));
        });
    }
  };
};

export {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_SUCCESS,
  REQUEST_ARTICLES_FAILURE,
  DISPLAY_ARTICLES,
  displayArticles,
  fetchArticles,
};
