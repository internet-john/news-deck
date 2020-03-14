import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
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

store.dispatch(fetchArticles());

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>{NewsDeckApp}</ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
