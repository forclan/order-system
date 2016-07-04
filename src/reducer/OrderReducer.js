import { ADD_ORDER } from '../actions/addOrder.js';

const OrderList = (state = {}, action) => {
  console.log(state);
  console.log(action.type);
  console.log(ADD_ORDER);
  switch (action.type) {
    case ADD_ORDER: {
      console.log('in addOrder');
      let nextState = null;
      const id = action.id;
      nextState = Object.assign({}, state);
      if (!state[id]) {
        nextState[id] = action.num > 0 ? action.num : 0;
      } else {
        const preOrderNum = state[id];
        const finalNum = preOrderNum + action.num;
        nextState[id] = finalNum > 0 ? finalNum : 0;
      }
      return nextState;
    }
    default:
      return state;
  }
};

export default OrderList;
