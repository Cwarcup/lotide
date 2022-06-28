// eqArrays which takes in two arrays and returns true or false, based on a perfect match.
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

//  assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Implement without which will return a subset of a given array, removing unwanted elements.
// This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const without = (arr, itemsToRemove) => {
  // empty array to store chars that pass condition
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // remove first item in array
    let temp = arr[i];

    // determine if temp variable is found in the itemsToRemove array
    if (!itemsToRemove.includes(temp)) {
      // if not item is not found, push temp to result array
      result.push(temp);
    }
  }
  return result;
};

// Test cases
// const withoutResult = without(['1', '2', '3'], [1, 2, '3'])
// assertArraysEqual(withoutResult, ["1", "2"]); // ✅ Assertion Passed: [1,2] === [1,2]

// const words = ['hello', 'world', 'lighthouse'];
// const result = without(words, ['lighthouse']); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
