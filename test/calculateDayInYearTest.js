const calculateDayInYear = require('../calculateDayInYear');
const chai = require('chai');
const assert = chai.assert;

describe("#calculateDayInYear", () => {
  it('61 days have passed from 1900/3/2', () => {
    const expected = 61;
    const input = calculateDayInYear('1900/3/2');
    assert.strictEqual(input, expected);
  });
  
  it('take into account leap year - 2000', () => {
    const expected = 62;
    const input = calculateDayInYear('2000/3/2');
    assert.strictEqual(input, expected);
  });
});