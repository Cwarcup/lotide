const anagram = require('../anagram');
const chai = require('chai');
const assert = chai.assert;

describe("#anagram", () => {
  it('return true for "rail safety" and "fairy tales"', () => {
    assert.isTrue(anagram('rail safety', 'fairy tales'));
  });
  it('return false for "rail safety" and "something else"', () => {
    assert.isFalse(anagram('rail safety', 'something else'));
  });
});