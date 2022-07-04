const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    const expected = ["Lighthouse", "Labs"];
    const input = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expected);
  });
  it(`returns 'Lighthouse' for the zero'th index of tail(["Hello", "Lighthouse", "Labs"]`, () => {
    const expected = 'Lighthouse';
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[0], expected);
  });
  it(`returns 'Labs' for the one'th index of tail(["Hello", "Lighthouse", "Labs"]`, () => {
    const expected = 'Labs';
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[1], expected);
  });
});