const join = require('../join');
const chai = require('chai');
const assert = chai.assert;

describe("#join", () => {
  it(`['gists', 'types', 'operators'] returns "gists, types, operators"`, () => {
    const expected = "gists, types, operators";
    const input = join(['gists', 'types', 'operators']);
    assert.deepEqual(input, expected);
  });

  it(`returns a string`, () => {
    const expected = "gists, types, operators";
    const input = join(['gists', 'types', 'operators']);
    assert.isString(input);
  });

});