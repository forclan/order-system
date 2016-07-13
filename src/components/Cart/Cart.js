import React, { PropTypes } from 'react';
import DishMinView from '../Dish/Dish';
import CouponList from '../CouponList/CouponList.js';
require('./Cart.scss');

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.getDOMArray = this.getOrderDOMArray.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.getTotalNumber = this.getTotalNumber.bind(this);
    this.getFiltedArrayByKeyName = this.getFiltedArrayByKeyName.bind(this);
    this.triggerShade = this.triggerShade.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
    this.state = {
      enableShade: false,
    };
  }
  getOrderDOMArray(arr, keyName) {
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
  setDisplay(val) {
    this.setState({
      enableShade: true,
      currentDisplay: val,
    });
  }
  hideShade() {
    this.setState({
      enableShade: false,
      currentDisplay: this.state.currentDisplay,
    });
  }
  triggerShade(val) {
    let nextShadeState = false;
    const preShadeState = this.state.enableShade;
    // 如果之前为为显示或者点击不同的标签，则切换为显示
    if (preShadeState === false || val !== this.state.currentDisplay) {
      nextShadeState = true;
    } else if (val === undefined || val === this.state.currentDisplay) {
      // 如果val为空（说明是点击背景）或者点击相同的标签，则不显示
      nextShadeState = false;
    }
    this.setState({
      enableShade: nextShadeState,
      // currentDisplay: this.state.currentDisplay,
      currentDisplay: val,
    });
  }
  render() {
    const price = this.getTotalPrice(this.props.orderArray, 'number');
    const orderNumber = this.getTotalNumber(this.props.orderArray, 'number');
    const minViewDropDown = this.getOrderDOMArray(this.props.orderArray, 'number');
    const couponDropDown = <CouponList couponArray={this.props.couponArray} />;
    let currentDisplay = null;
    const stateDisplay = this.state.currentDisplay;
    if (stateDisplay === 'minView') {
      currentDisplay = minViewDropDown;
    }
    if (stateDisplay === 'coupon') {
      currentDisplay = couponDropDown;
    }
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
                this.hideShade();
                e.stopPropagation();
              }
            }
          >
            <div className="dropdown-contents">
              {currentDisplay}
            </div>
          </div>
          <div
            className="cart-img"
            onClick={() => {
              this.triggerShade('minView');
            }}
          >
            {
              orderNumber > 0
              ? <div className="red-dot">{orderNumber}</div>
              : null
            }
          </div>
          <div
            className="cart-total-price"
            onClick={() => {
              this.triggerShade('minView');
            }}
          >
            <span>￥{price}</span>
          </div>
          <div
            className="cart-do-order"
            onClick={() => {
              this.triggerShade('coupon');
            }}
          >
            <span>优惠券/结算</span>
          </div>
        </div>
      </footer>
  );
  }
}
Cart.propTypes = {
  orderArray: PropTypes.array.isRequired,
  couponArray: PropTypes.array.isRequired,
  clickAdd: PropTypes.func.isRequired,
  clickMinus: PropTypes.func.isRequired,
};

export default Cart;
