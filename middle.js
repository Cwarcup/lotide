// assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

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

// used for testing purposes
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const middle = (arr) => {
  if (arr.length < 3) {
    return [];
  }

  // get middle index of array for odd number lengths
  const middle = Math.floor(arr.length);
  console.log(middle);
};

// test cases
// console.log(middle([1]));; // => []
// console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
