const eqArrays = require('../eqArrays');
const chai = require('chai');
const assert = chai.assert;

describe('#eqArrays', () => {
  it('returns true when given two arrays with the same elements', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  }
  );
  it('returns false when given two arrays with different elements', () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  }
  );
  it('returns true when given two arrays with the same elements', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  }
  );
});