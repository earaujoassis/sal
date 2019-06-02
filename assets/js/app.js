import 'phoenix_html';
// import socket from './socket';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Root from './root';
import reducers from './stores/reducers';

import '../css/app.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  root: reducers
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('application-root');
  ReactDOM.render(app, document.body.appendChild(div));
});
