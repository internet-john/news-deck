import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "react-error-boundary";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootStore from "./reducers/root";
import NewsDeckApp from "./components/newsDeckApp";

const store = createStore(rootStore);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>{NewsDeckApp}</ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
