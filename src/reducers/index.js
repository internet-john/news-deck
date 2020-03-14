import {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_SUCCESS,
  REQUEST_ARTICLES_FAILURE,
  DISPLAY_ARTICLES,
} from '../actions';

const initialState = {
  articles: [],
  isFetching: true,
  articlesFetched: false,
  articlesDisplayed: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return state;
    case REQUEST_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: !state.isFetching,
        articlesFetched: !state.articlesFetched,
      });
    case DISPLAY_ARTICLES:
      return Object.assign({}, state, {
        articlesDisplayed: !state.articlesDisplayed,
        articles: action.articles.map((article, idx) => ({
          id: idx,
          title: article.title.split('-')[0],
          description: article.description,
          author: article.author,
          source: article.source.name || '',
        })),
      });
    case REQUEST_ARTICLES_FAILURE:
      return Object.assign({}, state, {
        isFetching: !state.isFetching,
        articlesFetched: !state.articlesFetched,
      });
    default:
      return state;
  }
};

export default rootReducer;
