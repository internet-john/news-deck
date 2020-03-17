import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ErrorBoundary from 'react-error-boundary';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchArticles } from './actions';
import rootReducer from './reducers/index';
import * as actionCreators from './actions/index';
import NewsDeckApp from './components/newsDeckApp';

const composeEnhancers = composeWithDevTools({
  actionCreators,
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// TODO: save last filter in local storage or other alternative than hardcoding US
store.dispatch(fetchArticles('us'));

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>{NewsDeckApp}</ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
