const eqObjects = require('../eqObjects');
const chai = require('chai');
const assert = chai.assert;

describe('#eqObjects', () => {
  it('returns true when given two objects with the same keys and values', () => {
    assert.equal(eqObjects({ a: 1, b: 2 }, { a: 1, b: 2 }), true);
  });
  it('returns false when given two objects with different keys', () => {
    assert.equal(eqObjects({ a: 1, b: 2 }, { a: 1, c: 2 }), false);
  });
  it('returns true when given a value that is an array', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd, dc), true);
  });
  it('returns false when given a value that is an array that does not match', () => {
    const dc = { d: ["2", 3], c: "1" };
    const cd = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(cd, dc), false);
  });
});
 