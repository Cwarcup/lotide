const findKeyByValue = require('../findKeyByValue');
const chai = require('chai');
const assert = chai.assert;

describe('#findKeyByValue', () => {
  it('returns key of "drama" when passed object with matching value', () => {
    const bestTVShowsByGenre = {
      sciFi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it('returns "undefined" when passed no matching value found', () => {
    const bestTVShowsByGenre = {
      sciFi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre,  "That '70s Show"));
  });
});