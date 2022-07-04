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