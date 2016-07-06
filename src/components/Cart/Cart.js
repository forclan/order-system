import React, { PropTypes } from 'react';
import DishMinView from '../Dish/Dish';
require('./Cart.scss');

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.getDOMArray = this.getDOMArray.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }
  getDOMArray(arr) {
    return arr
      .filter(val => val.num > 0)
      .map(val =>
        <DishMinView
          price={val.price}
          imgSrc={null}
          description={null}
          name={val.name}
          number={val.number}
          clickAdd={() => this.props.clickAdd(val.name)}
          clickMinus={() => this.props.clickMinus(val.name)}
          key={val.name}
          isDirectionRow
        />);
  }
  getTotalPrice(arr, keyName) {
    if (arr.length === 0) {
      return 0;
    }
    // const numberOver0 = arr.filter(val => val[keyName] > 0);
    // console.log(numberOver0);
    return arr
      .filter(val => val[keyName] > 0)
      .reduce((pre, curr) => pre + curr[keyName] * curr.price, 0);
  }
  render() {
    const price = this.getTotalPrice(this.props.orderArray, 'number');
    return (
      <footer>
        <div className="cart-container">
          <div className="cart-img">
          </div>
          <div className="cart-total-price">
            <span>￥{price}</span>
          </div>
          <div className="cart-do-order">
            <span>去结算</span>
          </div>
        </div>
      </footer>
  );
  }
}
Cart.propTypes = {
  orderArray: PropTypes.array.isRequired,
  clickAdd: PropTypes.func.isRequired,
  clickMinus: PropTypes.func.isRequired,
};

export default Cart;
