const raisinAlarm = function (cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === '🍇') {
      return 'Raisin alert!';
    }
  }
  return 'All good!';
};

// console.log(raisinAlarm(['🍫', '🍫', '🍇', '🍫']));
// console.log(raisinAlarm(['🍫', '🍇', '🍫', '🍫', '🍇']));
// console.log(raisinAlarm(['🍫', '🍫', '🍫']));

// function to accept array of arrays
const raisinAlarmArray = function (cookies) {
  let arr = [];

  for (let item of cookies) {
    arr.push(raisinAlarm(item));
  }

  return arr;
};

// console.log(
//   raisinAlarmArray([
//     ['🍫', '🍫', '🍇', '🍫'],
//     ['🍫', '🍇', '🍫', '🍫', '🍇'],
//     ['🍫', '🍫', '🍫'],
//   ])
// );