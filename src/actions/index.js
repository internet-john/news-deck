const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const REQUEST_ARTICLES_SUCCESS = 'REQUEST_ARTICLES_SUCCESS';
const REQUEST_ARTICLES_FAILURE = 'REQUEST_ARTICLES_FAILURE';
const DISPLAY_ARTICLES = 'DISPLAY_ARTICLES';
const REMOVE_ARTICLES = 'REMOVE_ARTICLES';
const APPLY_FILTER = 'APPLY_FILTER';

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

const removeArticles = () => ({
  type: REMOVE_ARTICLES,
});

const setFilter = filter => ({
  type: APPLY_FILTER,
  filter,
});

const applyFilter = filter => {
  return dispatch => {
    dispatch(setFilter(filter));
    dispatch(removeArticles());
    dispatch(fetchArticles(filter));
  };
};

const fetchArticles = filter => {
  return dispatch => {
    dispatch(requestArticles());
    return fetch(
      `http://newsapi.org/v2/top-headlines?country=${filter}&apiKey=${process.env.API_KEY}`
    )
      .then(
        response => response.json(),
        error => dispatch(requestArticlesFailure(error))
      )
      .then(data => {
        dispatch(requestArticlesSuccess());
        dispatch(displayArticles(data.articles));
      });
  };
};

export {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_SUCCESS,
  REQUEST_ARTICLES_FAILURE,
  DISPLAY_ARTICLES,
  APPLY_FILTER,
  displayArticles,
  fetchArticles,
  applyFilter,
};
