import OrderReducer from './OrderReducer.js';
import DishReducer from './DishReducer.js';
import CouponReducer from './CouponReduce.js';
import { combineReducers } from 'redux';

const AppReducer = combineReducers({
  OrderReducer,
  DishReducer,
  CouponReducer,
});

export default AppReducer;
