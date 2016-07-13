import { TRIGGER_COUPON } from '../actions/triggerCoupon.js';
import { CouponInitialState } from './CouponTestData.js';
require('core-js/fn/object/assign');

const CouponReducer = (state = CouponInitialState, action) => {
  switch (action.type) {
    case TRIGGER_COUPON: {
      const id = action.id;
      const nextState = state.slice();
      const couponIds = state.map(val => val.id);
      const indexOfTriggerId = couponIds.indexOf(id);
      // cannot find 'id';
      if (indexOfTriggerId === -1) {
        return nextState;
      }
      nextState[indexOfTriggerId].isValid = !nextState[indexOfTriggerId].isValid;
      return nextState;
    }
    default:
      return state;
  }
};

export default CouponReducer;
