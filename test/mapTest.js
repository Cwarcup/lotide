const map = require('../map');
const chai = require('chai');
const assert = chai.assert;

describe('#map', () => {
  it('returns first letter of each day of the week', () => {
    const daysOfTheWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const result = map(daysOfTheWeek, (day) => day[0]);
    assert.deepEqual(result, ['M', 'T', 'W', 'T', 'F', 'S', 'S']);
  });
  it('returns each number multiplied by two in the array', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = map(numbers, (num) => num * 2);
    assert.deepEqual(result, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });

});