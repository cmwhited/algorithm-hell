import * as indexFn from '../index';

describe('uniqueSetOfThree()', () => {
  it('should return the unique count from the given array', () => {
    const givenInputArray = [4, 3, 1, 2];
    const givenThreshold = 7;
    const expected = 2;

    const actual: number = indexFn.uniqueSetOfThree(givenInputArray, givenThreshold);

    expect(actual).toEqual(expected);
  });
});
