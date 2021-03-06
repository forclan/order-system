import React, { PropTypes } from 'react';
import DishList from './components/DishList/DishList';
import CategoryBar from './components/CategoryBar/CategoryBar';
import { addOrder } from './actions/addOrder.js';
import { connect } from 'react-redux';
import ShoppingCart from './components/Cart/Cart';
import { triggerCoupon } from './actions/triggerCoupon.js';
require('./App.scss');
// add Object.assign() polyfilee
require('core-js/fn/object/assign');

const cat = ['lunch', 'tea', 'hot-drinks', '1', '2', '3', '4', '5', '6'];
const App = (props) => {
  let dishArray = [];
  if (props.dishArrayWithOrderNum.length > 0) {
    dishArray = props.dishArrayWithOrderNum;
  }
  return (
    <div>
      <CategoryBar
        categories={cat}
        currentCategory="lunch"
      />
      <div className="order-view-container">
        <DishList
          dishList={dishArray}
          clickAdd={props.addOrderBy1}
          clickMinus={props.minusOrderBy1}
          dishCategory="lunch"
        />
      </div>
      <ShoppingCart
        orderArray={props.dishArrayWithOrderNum}
        couponArray={props.couponArray}
        clickAdd={props.addOrderBy1}
        clickMinus={props.minusOrderBy1}
        triggerCouponWithId={props.triggerCouponWithId}
      />
    </div>
  );
};

App.propTypes = {
  addOrderBy1: PropTypes.func.isRequired,
  minusOrderBy1: PropTypes.func.isRequired,
  dishArrayWithOrderNum: PropTypes.array.isRequired,
  couponArray: PropTypes.array.isRequired,
  triggerCouponWithId: PropTypes.func.isRequired,
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

const getCoupon = arr => arr;
const mapStateToProps = (state) => ({
  couponArray: getCoupon(state.CouponReducer),
  dishArrayWithOrderNum: getDishWithOrderNum(state.DishReducer, state.OrderReducer),
});

const mapDispatchToProps = (dispatch) => ({
  addOrderBy1: id => dispatch(addOrder(id, 1)),
  minusOrderBy1: id => dispatch(addOrder(id, -1)),
  triggerCouponWithId: id => dispatch(triggerCoupon(id)),
});

const VisibleDash = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default VisibleDash;
