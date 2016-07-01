import { ADD_ORDER } from '../actions/addOrder.js';

const OrderList = (state = {}, action) => {
  switch (action.type) {
    case ADD_ORDER: {
      let nextState = null;
      const id = action.id;
      nextState = Object.assign({}, state);
      if (!state[id]) {
        nextState[id] = action.num > 0 ? action.num : 0;
      } else {
        const preOrderNum = state[id].num;
        const finalNum = preOrderNum + action.num;
        nextState[id].num = finalNum > 0 ? finalNum : 0;
      }
      return nextState;
    }
    default:
      return state;
  }
};

export default OrderList;
