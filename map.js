// Our map function will take in two arguments:
// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

/// testing
// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = (actual, expected) => {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };
// const daysOfTheWeek = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];
// assertArraysEqual(result1, ['M', 'T', 'W', 'T', 'F', 'S', 'S']);
// // ✅ Assertion Passed: [M,T,W,T,F,S,S] === [M,T,W,T,F,S,S]
