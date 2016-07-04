import React, { PropTypes } from 'react';
import DishList from './components/DishList/DishList';
import CategoryBar from './components/CategoryBar/CategoryBar';
import { addOrder } from './actions/addOrder.js';
import { connect } from 'react-redux';

const cat = ['lunch', 'tea', 'hot-drinks'];
const App = (props) => {
  // let order1 = null;
  let dishArray = [];
  if (props.dishArray.length > 0) {
    // order1 = props.dishArray[0];
    dishArray = props.dishArrayWithOrderNum;
  }
  return (
    <div>
      <DishList
        dishList={dishArray}
        clickAdd={props.addOrderBy1}
        clickMinus={props.minusOrderBy1}
        dishCategory="lunch"
      />
      <CategoryBar
        categories={cat}
        currentCategory="lunch"
      />
    </div>
  );
};

App.propTypes = {
  orders: PropTypes.array.isRequired,
  dishArray: PropTypes.array.isRequired,
  addOrderBy1: PropTypes.func.isRequired,
  minusOrderBy1: PropTypes.func.isRequired,
  dishArrayWithOrderNum: PropTypes.array.isRequired,
};

const getDishArray = arr => arr;

const getOrder = obj => {
  if (obj === null) {
    return null;
  }
  const asserts = [];
  /* eslint no-restricted-syntax: ["off"] */
  for (const i in obj) {
    if (obj.hasOwnProperty) {
      Array.prototype.push.call(asserts, {
        id: i,
        num: obj[i],
      });
    }
  }
  return asserts;
};
const getDishWithOrderNum = (dishArr, orders) => {
  const dishArrWithOrderNum = dishArr.map(val => {
    let orderNum = 0;
    if (orders[val.name]) {
      orderNum = orders[val.name];
    }
    const tmpVal = Object.assign({}, val);
    tmpVal.number = orderNum;
    return tmpVal;
  });
  return dishArrWithOrderNum;
};

const mapStateToProps = (state) => ({
  orders: getOrder(state.DishReducer.dishArray),
  dishArray: getDishArray(state.DishReducer),
  dishArrayWithOrderNum: getDishWithOrderNum(state.DishReducer, state.OrderReducer),
});

const mapDispatchToProps = (dispatch) => ({
  addOrderBy1: id => dispatch(addOrder(id, 1)),
  minusOrderBy1: id => dispatch(addOrder(id, -1)),
});

const VisibleDash = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default VisibleDash;
