import { expect } from 'chai';
import dishReducer from '../../src/reducer/DishReducer';

describe('Dish Recuder', () => {
  it('should return the initial state', () => {
    expect(
      dishReducer(undefined, {})
    )
      .to.eql(
      [{
        id: 1,
        name: 'apple',
        price: 10,
      }, {
        id: 2,
        name: 'peach',
        price: 11,
      }]
      );
  });
});
