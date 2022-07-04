const without = require('../without');
const chai = require('chai');
const assert = chai.assert;

describe('#without', () => {
  it('returns new array without the string "lighthouse"', () => {
    const words = ['hello', 'world', 'lighthouse'];
    const result = without(words, ['lighthouse']);
    assert.deepEqual(result, ['hello', 'world']);
  });
  it('does not alter original array', () => {
    const words = ['hello', 'world', 'lighthouse'];
    const result = without(words, ['lighthouse']);
    assert.deepEqual(words, ['hello', 'world', 'lighthouse']);
  });
  it('returns [ 1.2 ] from [3.2, 5.2, 5.2, 1.2] input array, and [5.2, 3.2] to be removed', () => {
    const numbers = [3.2, 5.2, 5.2, 1.2];
    const result = without(numbers, [5.2, 3.2]);
    assert.deepEqual(result, [1.2]);
  });

});