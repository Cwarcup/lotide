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
  // edge case when arr has less than 3 items
  if (arr.length < 3) {
    return [];
  }

  // get middle index of array
  const middleIndex = Math.floor(arr.length / 2);

  // if true (1), return first
  // if false (even length) (0), return second option
  return arr.length % 2 ? arr[middleIndex] : [arr[middleIndex - 1], arr[middleIndex]];
};

// test cases
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
