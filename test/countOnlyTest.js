const countOnly = require('../countOnly');
const chai = require('chai');
const assert = chai.assert;

describe("#countOnly", () => {
  it(`returns {} when empty string is passed`, () => {
    const expected = {};
    const input = countOnly('');
    assert.deepEqual(input, expected);
  });
  it(`returns truthy value frequency`, () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe',
    ];
    const itemsToCount = { Jason: true, Karima: true, Fang: true, Agouhanna: false };
    const input = countOnly(firstNames, itemsToCount);
    assert.deepEqual(input, { Fang: 2, Jason: 1 });
  });

});