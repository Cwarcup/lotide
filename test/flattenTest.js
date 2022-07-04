const flatten = require('../flatten');
const chai = require('chai');
const assert = chai.assert;

describe("#flatten", () => {
  it('[1, 2, [3, 4], 5, [6]] returns [1, 2, 3, 4, 5, 6]', () => {
    const expected = [1, 2, 3, 4, 5, 6];
    const input = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(input, expected);
  });

});