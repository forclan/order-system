import { expect } from 'chai';
import dishReducer from '../../src/reducer/DishReducer';
import initialState from '../../src/reducer/DishInitialState';

describe('Dish Recuder', () => {
  it('should return the initial state', () => {
    expect(
      dishReducer(undefined, {})
    )
      .to.eql(
        initialState
      );
  });
});
