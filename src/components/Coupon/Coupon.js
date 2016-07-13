import React, { PropTypes } from 'react';
require('./Coupon.scss');
const Coupon = props => {
  const { discount, description, isValid } = props;
  const validStyle = isValid ? 'coupon coupon-valid' : 'coupon';
  return (
    <div className={validStyle}>
      <div className="discount">
        {discount}
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
    </div>
  );
};

Coupon.propTypes = {
  discount: PropTypes.number.isRequired,
  description: PropTypes.string,
  isValid: PropTypes.bool,
};

export default Coupon;
