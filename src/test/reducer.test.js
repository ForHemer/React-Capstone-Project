import reducer from '../redux/zoo/zoo';

describe('When we give wrong action in detailsReducer ', () => {
  test('when the action is wrong, we return the same state with no changes', () => {
    // arrange
    const state = [{
      type: 'animal',
      name: 'animal',
      detail: true,
    }];

    const WRONG_ACTION = 'stock-performance/home/WRONG_ACTION';
    const action = { type: WRONG_ACTION, payload: state };

    // act
    const result = reducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
