const palindrome = require('../palindrome');
const chai = require('chai');
const assert = chai.assert;

describe("#palindrome", () => {
  it('returns true for a single letter', () => {
    const input = palindrome('p');
    assert.isTrue(input);
  });
  it('returns true for single word - "racecar"', () => {
    const input = palindrome('racecar');
    assert.isTrue(input);
  });
  
  it('returns false for single word that is not a palindrome - "foo"', () => {
    const input = palindrome('foo');
    assert.isFalse(input);
  });
  
  it('returns true for palindromes with spaces - "a santa at nasa"', () => {
    const input = palindrome('a santa at nasa');
    assert.isTrue(input);
  });

  
  it('returns true for palindromes with spaces and capitals- "a santa at NASA"', () => {
    const input = palindrome('a santa at NASA');
    assert.isTrue(input);
  });
});