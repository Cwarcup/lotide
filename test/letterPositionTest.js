const letterPosition = require('../letterPosition');
const chai = require('chai');
const assert = chai.assert;

describe('#letterPosition', () => {
  it('returns expected object for a given string', () => {
    const str = 'lighthouse in the house';
    const returnObj = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    assert.deepEqual(letterPosition(str), returnObj);
  });

});