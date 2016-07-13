import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducer/index.js';
import App from './App.js';
import CouponList from './components/CouponList/CouponList.js';

let store = createStore(reducers, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
const couponArray = [
  {
    discount: 1,
  }, {
    discount: 2,
  }, {
    discount: 3,
  }, {
    discount: 4,
    isValid: true,
  },
];
render(
  <Provider store={store}>
    <div>
      <CouponList couponArray={couponArray} />
      {/* <App /> */}
    </div>
  </Provider>,
  document.getElementById('app')
);
