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

// recursive function to check if two objects are equal
const eqObjects = function (object1, object2) {
  //get arr of keys for each object
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);

  // if object keys differ in number
  if (keysObj1.length !== keysObj2.length) {
    return false;
  } else {
    // iterate through one of they keysObj array
    for (const key of keysObj1) {
      // check to see if the key is an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // if the key is an array, call the eqArrays function
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          // if so, call the eqObjects function
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};
