const conditionalSum = require('../conditionalSum');
const chai = require('chai');
const assert = chai.assert;

describe("#conditionalSum", () => {
  it('is array [1, 2, 3, 4, 5], sum even numbers.', () => {
    const expected = 6;
    const input = conditionalSum([1, 2, 3, 4, 5], 'even');
    assert.strictEqual(input, expected);
  });
  it('is array [1, 2, 3, 4, 5], sum odd numbers.', () => {
    const expected = 9;
    const input = conditionalSum([1, 2, 3, 4, 5], 'odd');
    assert.strictEqual(input, expected);
  });
  it('is array [13, 88, 12, 44, 99], sum even numbers.', () => {
    const expected = 144;
    const input = conditionalSum([13, 88, 12, 44, 99], 'even');
    assert.strictEqual(input, expected);
  });
  it('calling on an empty array returns 0', () => {
    const expected = 0;
    const input = conditionalSum([], 'odd');
    assert.strictEqual(input, expected);
  });

});