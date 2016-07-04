export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (id, num) => {
  console.log('addOrder' + id + num);
  return {
    type: ADD_ORDER,
    id,
    num,
  };
};
