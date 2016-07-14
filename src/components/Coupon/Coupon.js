import React, { PropTypes } from 'react';
require('./Coupon.scss');

const checked = (
  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);
const ableToSelect = (
  /* eslint max-len: ["off", 100] */
  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
  </svg>
);
const Coupon = props => {
  const { discount, description, isValid, onClick } = props;
  const isInUse = isValid;
  const validStyle = isValid ? 'coupon coupon-valid' : 'coupon';
  return (
    <div className={validStyle} onClick={onClick}>
      <div className="discount">
        {discount}元优惠券
      </div>
      {
        description
        ? (
          <div className="coupon-desciption">
            {description}
          </div>
          )
        : null
      }
      <div className="coupon-status">
        {
          isInUse ? checked : ableToSelect
        }
      </div>
    </div>
  );
};

Coupon.propTypes = {
  discount: PropTypes.number.isRequired,
  description: PropTypes.string,
  isValid: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Coupon;
