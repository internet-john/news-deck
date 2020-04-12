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

const requestArticlesFailure = (error) => ({
  type: REQUEST_ARTICLES_FAILURE,
  error,
});

const displayArticles = (articles) => ({
  type: DISPLAY_ARTICLES,
  articles,
});

const removeArticles = () => ({
  type: REMOVE_ARTICLES,
});

const setCountryFilter = (countryFilter) => ({
  type: APPLY_COUNTRY_FILTER,
  countryFilter,
});

const setCategoryFilter = (categoryFilter) => ({
  type: APPLY_CATEGORY_FILTER,
  categoryFilter,
});

const applyCountryFilter = (newCountryFilter) => {
  return (dispatch, getState) => {
    const { countryFilter, categoryFilter } = getState();

    if (countryFilter !== newCountryFilter) {
      dispatch(removeArticles());
      dispatch(setCountryFilter(newCountryFilter));
      dispatch(fetchArticles(newCountryFilter, categoryFilter));
    }
  };
};

const applyCategoryFilter = (newCategoryFilter) => {
  return (dispatch, getState) => {
    const { countryFilter, categoryFilter } = getState();

    if (categoryFilter !== newCategoryFilter) {
      dispatch(removeArticles());
      dispatch(setCategoryFilter(newCategoryFilter));
      dispatch(fetchArticles(countryFilter, newCategoryFilter));
    }
  };
};

const fetchArticles = (country, category) => {
  return async (dispatch) => {
    dispatch(requestArticles());
    return await fetch(
      `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.API_KEY}`
    )
      .then(
        (response) => response.json(),
        (error) => dispatch(requestArticlesFailure(error))
      )
      .then((data) => {
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
  applyCountryFilter,
  applyCategoryFilter,
};
