import orderReducer from '../../src/reducer/OrderReducer';
import { expect } from 'chai';
import * as actions from '../../src/actions/addOrder';

describe('order reducer', () => {
  it('should return a empty initital state', () => {
    expect(
      orderReducer({}, {})
    )
      .to.eql({});
  });

  it('should add a apple order by one', () => {
    expect(
      orderReducer({}, {
        type: actions.ADD_ORDER,
        id: 'apple',
        num: 1,
      })
    )
      .to.eql({
        apple: 1,
      });
  });

  it('should add a random String by a random number', () => {
    const randomStrLen = Math.ceil(Math.random() * 10);
    const randomNumBigThan0 = Math.ceil(Math.random() * 10);
    const randomString = (Math.random() + 1).toString(36).substring(2, randomStrLen + 2);
    const state = {};
    state[randomString] = randomNumBigThan0;
    expect(
      orderReducer({}, {
        type: actions.ADD_ORDER,
        id: randomString,
        num: randomNumBigThan0,
      })
    )
      .to.eql(state);
  });

  it('should add a negative num to state return a object with 0 as value', () => {
    expect(
      orderReducer({}, {
        type: actions.ADD_ORDER,
        id: 'apple',
        num: -2,
      })
    )
      .to.eql({
        apple: 0,
      });
  });

  it('should the minimun num of a object should be 0', () => {
    expect(
      orderReducer({
        apple: 11,
      }, {
        type: actions.ADD_ORDER,
        id: 'apple',
        num: -12,
      })
    )
      .to.eql({
        apple: 0,
      });
  });
});
