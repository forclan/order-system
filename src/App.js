import React, { PropTypes } from 'react';
import Dish from './components/Dish.js';
import addOrder from './actions/addOrder.js';
import { connect } from 'react-redux';

const App = (props) => {
  let order1 = null;
  if (props.dishArray.length > 0) {
    order1 = props.dishArray[0];
  }
  return (
    <div>
      <Dish
        imgSrc={"./assets/minus.png"}
        price={order1.price}
        description="very good"
        name={order1.name}
        number={10}
      />
    </div>);
};

App.propTypes = {
  orders: PropTypes.array.isRequired,
  dishArray: PropTypes.array.isRequired,
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

const mapStateToProps = (state) => ({
  orders: getOrder(state.DishReducer.dishArray),
  dishArray: getDishArray(state.DishReducer),
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
