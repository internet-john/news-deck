import { ACTION_TYPES } from '../actions';
import { StoreState } from '../types';

const initialState: StoreState = {
  articles: [],
  isFetching: false,
  articlesFetched: false,
  articlesDisplayed: false,
  countryFilter: 'us',
  categoryFilter: 'general',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ACTION_TYPES.REQUEST_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        articlesFetched: true,
      });
    case ACTION_TYPES.REQUEST_ARTICLES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        articlesFetched: false,
      });
    case ACTION_TYPES.DISPLAY_ARTICLES:
      return Object.assign({}, state, {
        articlesDisplayed: true,
        articles: action.articles.map(
          (
            article: {
              title: string;
              description: string;
              author: string;
              source: { name: string };
              name: string;
              url: string;
            },
            idx: number
          ) => ({
            id: idx,
            title: article.title.split('-')[0],
            description: article.description,
            author: article.author,
            source: article.source.name || '',
            url: article.url,
          })
        ),
      });
    case ACTION_TYPES.REMOVE_ARTICLES:
      return Object.assign({}, state, {
        articlesDisplayed: false,
        articles: [],
      });
    case ACTION_TYPES.APPLY_COUNTRY_FILTER:
      return Object.assign({}, state, { countryFilter: action.countryFilter });
    case ACTION_TYPES.APPLY_CATEGORY_FILTER:
      return Object.assign({}, state, {
        categoryFilter: action.categoryFilter,
      });
    default:
      return state;
  }
};

export default rootReducer;
