import OrderReducer from './Order.js';
import DishReducer from './Dish.js';
import { combineReducers } from 'redux';
// import { createStore } from 'redux';

const AppReducer = combineReducers({
  OrderReducer,
  DishReducer,
});

// let s1 = createStore(OrderReducer);
// console.log('creates1');
// console.log(s1.getState());
// let s2 = createStore(DishReducer);
// console.log('creates2');
// console.log(s2.getState());
//
// let comb = createStore(AppReducer);
// console.log(comb.getState());
export default AppReducer;
