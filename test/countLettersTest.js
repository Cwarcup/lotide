const countLetters = require('../countLetters');
const chai = require('chai');
const assert = chai.assert;

describe("#countLetters", () => {
  it(`returns {} when emprt string is passed`, () => {
    const expected = {};
    const input = countLetters('');
    assert.deepEqual(input, expected);
  });
  it(`returns {a: 1} for 'a'`, () => {
    const expected = {a: 1};
    const input = countLetters('a');
    assert.deepEqual(input, expected);
  });
  it(`returns {a: 2} for 'aa'`, () => {
    const expected = {a: 2};
    const input = countLetters('aa');
    assert.deepEqual(input, expected);
  });
  it(`returns {a: 1, b: 2, c: 2, d: 1} for 'dabcbc'`, () => {
    const expected = {a: 1, b: 2, c: 2, d: 1};
    const input = countLetters('dabcbc');
    assert.deepEqual(input, expected);
  });
});