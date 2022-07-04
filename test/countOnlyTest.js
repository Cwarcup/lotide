const countOnly = require('../countOnly');
const chai = require('chai');
const assert = chai.assert;

describe("#countOnly", () => {
  it(`returns {} when empty string is passed`, () => {
    const expected = {};
    const input = countOnly('');
    assert.deepEqual(input, expected);
  });
  it(`returns {a: 1} for 'a'`, () => {
    const expected = {a: 1};
    const input = countOnly('a');
    assert.deepEqual(input, expected);
  });
  it(`returns {a: 2} for 'aa'`, () => {
    const expected = {a: 2};
    const input = countOnly('aa');
    assert.deepEqual(input, expected);
  });
  it(`returns {a: 1, b: 2, c: 2, d: 1} for 'dabcbc'`, () => {
    const expected = {a: 1, b: 2, c: 2, d: 1};
    const input = countOnly('dabcbc');
    assert.deepEqual(input, expected);
  });
});