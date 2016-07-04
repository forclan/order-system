import OrderReducer from './OrderReducer.js';
import DishReducer from './DishReducer.js';
import { combineReducers } from 'redux';

const AppReducer = combineReducers({
  OrderReducer,
  DishReducer,
});

export default AppReducer;
