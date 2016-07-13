import React, { PropTypes } from 'react';
import Coupon from '../Coupon/Coupon.js';

const CouponList = props => {
  const { couponArray } = props;
  if (couponArray.length === 0) {
    return <div></div>;
  }
  const couponDOM = couponArray.map(val =>
    <Coupon
      discount={val.discount}
      description={val.description}
      isValid={val.isValid}
    />
  );
  return <div>{couponDOM}</div>;
};

CouponList.propTypes = {
  couponArray: PropTypes.array.isRequired,
};

export default CouponList;
