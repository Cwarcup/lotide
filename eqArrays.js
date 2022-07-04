const assertEqual = require('./assertEqual');

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

// recursive function to check if two objects are equal
const eqArrays = (arr1, arr2) => {
  // base case
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // check if both elements are arrays
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        // if they are arrays, call the eqArrays function
        return false;
      }
      // if they are not arrays, this condition
    } else if (arr1[i] !== arr2[i]) {
      // check if characters are equal
      return false;
    }
  }
  // if all elements are equal, return true
  return true;
};

module.exports = eqArrays;
