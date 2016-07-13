import React, { PropTypes } from 'react';
import DishMinView from '../Dish/Dish';
require('./Cart.scss');

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.getDOMArray = this.getDOMArray.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.getTotalNumber = this.getTotalNumber.bind(this);
    this.getFiltedArrayByKeyName = this.getFiltedArrayByKeyName.bind(this);
    this.triggerShade = this.triggerShade.bind(this);
    this.state = {
      enableShade: false,
    };
  }
  getDOMArray(arr, keyName) {
    return this.getFiltedArrayByKeyName(arr, keyName)
      .map(val =>
        <DishMinView
          price={val.price}
          imgSrc={null}
          description={null}
          name={val.name}
          number={val.number}
          // need to prevent bubble
          clickAdd={
            (e) => {
              this.props.clickAdd(val.name);
              e.stopPropagation();
            }
          }
          clickMinus={
            (e) => {
              this.props.clickMinus(val.name);
              e.stopPropagation();
            }
          }
          key={val.name}
          isDirectionRow
        />);
  }
  getFiltedArrayByKeyName(arr, keyName) {
    if (arr.length === 0) {
      return [];
    }
    return arr.filter(val => val[keyName] > 0);
  }
  getTotalNumber(arr, keyName) {
    return this.getFiltedArrayByKeyName(arr, keyName).length;
  }
  getTotalPrice(arr, keyName) {
    return this.getFiltedArrayByKeyName(arr, keyName)
      .reduce((pre, curr) => pre + curr[keyName] * curr.price, 0);
  }
  triggerShade() {
    this.setState({
      enableShade: !this.state.enableShade,
    });
  }

  render() {
    const price = this.getTotalPrice(this.props.orderArray, 'number');
    const orderNumber = this.getTotalNumber(this.props.orderArray, 'number');
    const dromDown = this.getDOMArray(this.props.orderArray, 'number');
    const dropdownDisplayClass = this.state.enableShade
      ? 'cart-dropdown show'
      : 'cart-dropdown hide';
    return (
      <footer>
        <div className="cart-container">
          <div
            className={dropdownDisplayClass}
            onClick={
              (e) => {
                this.triggerShade();
                e.stopPropagation();
              }
            }
          >
            <div className="dropdown-contents">
              {dromDown}
            </div>
          </div>
          <div className="cart-img" onClick={this.triggerShade}>
            {
              orderNumber > 0
              ? <div className="red-dot">{orderNumber}</div>
              : null
            }
          </div>
          <div className="cart-total-price" onClick={this.triggerShade}>
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
