const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const REQUEST_ARTICLES_SUCCESS = 'REQUEST_ARTICLES_SUCCESS';
const REQUEST_ARTICLES_FAILURE = 'REQUEST_ARTICLES_FAILURE';
const DISPLAY_ARTICLES = 'DISPLAY_ARTICLES';
const REMOVE_ARTICLES = 'REMOVE_ARTICLES';
const APPLY_COUNTRY_FILTER = 'APPLY_COUNTRY_FILTER';
const APPLY_CATEGORY_FILTER = 'APPLY_CATEGORY_FILTER';

import { COUNTRIES, CATEGORIES } from '../constants';

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
  type: `APPLY_${isCountry(filter) ? 'COUNTRY' : 'CATEGORY'}_FILTER`,
  filter,
});

const isCountry = selectedFilter =>
  Boolean(COUNTRIES.find(country => country === selectedFilter));
const isCategory = selectedFilter =>
  Boolean(CATEGORIES.find(category => category === selectedFilter));

const applyFilter = filter => {
  return (dispatch, getState) => {
    dispatch(setFilter(filter));
    dispatch(removeArticles());
    const { countryFilter, categoryFilter } = getState();
    dispatch(fetchArticles(countryFilter, categoryFilter));
  };
};

const fetchArticles = (country, category) => {
  return dispatch => {
    dispatch(requestArticles());
    return fetch(
      `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.API_KEY}`
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
  REMOVE_ARTICLES,
  APPLY_COUNTRY_FILTER,
  APPLY_CATEGORY_FILTER,
  displayArticles,
  fetchArticles,
  applyFilter,
};
