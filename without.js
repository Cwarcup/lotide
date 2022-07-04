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

module.exports = without;

// Test cases
// const withoutResult = without(['1', '2', '3'], [1, 2, '3'])
// assertArraysEqual(withoutResult, ["1", "2"]); // ✅ Assertion Passed: [1,2] === [1,2]

// const words = ['hello', 'world', 'lighthouse'];
// const result = without(words, ['lighthouse']); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
