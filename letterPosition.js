const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//  return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = (str) => {
  const result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char.match(/[a-z]/g)) {
      if (result[str[i]]) {
        result[str[i]].push(i);
      } else {
        result[str[i]] = [i];
      }
    }
  }
  return result;
};

const res = letterPositions('lighthouse in the house');
console.log(res);
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
