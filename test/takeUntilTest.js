const takeUntil = require('../takeUntil');
const chai = require('chai');
const assert = chai.assert;

describe('#takeUntil', () => {
  it('returns all values in array that are greater than zero', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data, (x) => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });
  it('returns all values in array that are not commas', () => {
    const data = ["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood'];
    const result = takeUntil(data, (x) => x === ',');
    assert.deepEqual(result, ["I've", 'been', 'to', 'Hollywood']);
  });
});