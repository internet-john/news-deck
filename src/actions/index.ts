enum ACTION_TYPES {
  REQUEST_ARTICLES = 'REQUEST_ARTICLES',
  REQUEST_ARTICLES_SUCCESS = 'REQUEST_ARTICLES_SUCCESS',
  REQUEST_ARTICLES_FAILURE = 'REQUEST_ARTICLES_FAILURE',
  DISPLAY_ARTICLES = 'DISPLAY_ARTICLES',
  REMOVE_ARTICLES = 'REMOVE_ARTICLES',
  APPLY_COUNTRY_FILTER = 'APPLY_COUNTRY_FILTER',
  APPLY_CATEGORY_FILTER = 'APPLY_CATEGORY_FILTER',
}

const requestArticles = () => ({
  type: ACTION_TYPES.REQUEST_ARTICLES,
});

const requestArticlesSuccess = () => ({
  type: ACTION_TYPES.REQUEST_ARTICLES_SUCCESS,
});

const requestArticlesFailure = (error: string) => ({
  type: ACTION_TYPES.REQUEST_ARTICLES_FAILURE,
  error,
});

const displayArticles = (articles: Array<Object>) => ({
  type: ACTION_TYPES.DISPLAY_ARTICLES,
  articles,
});

const removeArticles = () => ({
  type: ACTION_TYPES.REMOVE_ARTICLES,
});

const setCountryFilter = (countryFilter: string) => ({
  type: ACTION_TYPES.APPLY_COUNTRY_FILTER,
  countryFilter,
});

const setCategoryFilter = (categoryFilter: string) => ({
  type: ACTION_TYPES.APPLY_CATEGORY_FILTER,
  categoryFilter,
});

const applyCountryFilter = (newCountryFilter: string) => {
  return (dispatch, getState) => {
    const { countryFilter, categoryFilter } = getState();

    if (countryFilter !== newCountryFilter) {
      dispatch(removeArticles());
      dispatch(setCountryFilter(newCountryFilter));
      dispatch(fetchArticles(newCountryFilter, categoryFilter));
    }
  };
};

const applyCategoryFilter = (newCategoryFilter: string) => {
  return (dispatch, getState) => {
    const { countryFilter, categoryFilter } = getState();

    if (categoryFilter !== newCategoryFilter) {
      dispatch(removeArticles());
      dispatch(setCategoryFilter(newCategoryFilter));
      dispatch(fetchArticles(countryFilter, newCategoryFilter));
    }
  };
};

const fetchArticles = (country: string, category: string) => {
  return async (dispatch) => {
    dispatch(requestArticles());
    return await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.API_KEY}`
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
  ACTION_TYPES,
  displayArticles,
  fetchArticles,
  applyCountryFilter,
  applyCategoryFilter,
};
