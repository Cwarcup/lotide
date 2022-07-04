const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// test cases
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

const chai = require('chai');
const assert = chai.assert;

describe("#middle", () => {
  it(`returns [] for [1]`, () => {
    const expected = [];
    const input = middle([1]);
    assert.deepEqual(input, expected);
  });
  it(`returns [] for [1, 2]`, () => {
    const expected = [];
    const input = middle([1, 2]);
    assert.deepEqual(input, expected);
  });
  it(`returns [2] for [1, 2, 3]`, () => {
    const expected = [2];
    const input = middle([1, 2, 3]);
    assert.deepEqual(input, expected);
  });
  it(`returns [3] for [1, 2, 3, 4, 5]`, () => {
    const expected = [3];
    const input = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(input, expected);
  });
  it(`returns [2, 3] for [1, 2, 3, 4]`, () => {
    const expected = [2, 3];
    const input = middle([1, 2, 3, 4]);
    assert.deepEqual(input, expected);
  });
  it(`returns [3, 4] for [1, 2, 3, 4, 5, 6]`, () => {
    const expected = [3, 4];
    const input = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(input, expected);
  });
});