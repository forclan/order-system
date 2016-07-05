import * as actions from '../../src/actions/addOrder';
import { expect } from 'chai';

describe('actions', () => {
  it('should create a addOrder action', () => {
    const id = 'apple';
    const num = 10;
    const expectionAction = {
      type: actions.ADD_ORDER,
      id,
      num,
    };
    // console.log(actions.addOrder(id, num));
    expect(actions.addOrder(id, num)).to.eql(expectionAction);
  });
});
