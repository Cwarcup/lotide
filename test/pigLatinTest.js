const pigLatin = require('../pigLatin');
const chai = require('chai');
const assert = chai.assert;

describe("#pigLatin", () => {
  it('returns "ellohay" for "hello', () => {
    const input = pigLatin('hello');
    assert.equal(input, 'ellohay');
  });
  it('returns "owhay areyay ouyay" for "how are you', () => {
    const input = pigLatin('how are you');
    assert.equal(input, 'owhay areyay ouyay');
  });

});