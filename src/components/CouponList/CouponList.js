import React, { PropTypes } from 'react';
import Coupon from '../Coupon/Coupon.js';

/**
 * it will stopPropagation
 */
const CouponList = props => {
  const { couponArray, couponClickWithId } = props;
  if (couponArray.length === 0) {
    return <div></div>;
  }
  const couponDOM = couponArray.map(val =>
    <Coupon
      discount={val.discount}
      description={val.description}
      isValid={val.isValid}
      onClick={(e) => {
        couponClickWithId(val.id);
        e.stopPropagation();
      }}
    />
  );
  return <div>{couponDOM}</div>;
};

CouponList.propTypes = {
  couponArray: PropTypes.array.isRequired,
  couponClickWithId: PropTypes.func.isRequired,
};

export default CouponList;
