import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducer/index.js';
import App from './App.js';

// console.log(reducers.getState());
let store = createStore(reducers, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
