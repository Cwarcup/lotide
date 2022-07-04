const findKey = require('../findKey');
const chai = require('chai');
const assert = chai.assert;

describe('#findKey', () => {
  it('it returns the "noma" when the callback is truthy, finding a value with 2 stars', () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 2;
    assert.equal(findKey(obj, callback), 'noma');
  });
});
