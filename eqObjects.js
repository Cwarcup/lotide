const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = (object1, object2) => {
  //get arr of keys for each object
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);

  // if object keys differ in number
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }

  // iterate through one of the keys arr
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//handling arrays

const cd = {c: '1', d: ['2', 3]};
const dc = {d: ['2', 3], c: '1'};

console.log(eqObjects(cd, dc)); // => true

const cd2 = {c: '1', d: ['2', 3, 4]};
console.log(eqObjects(cd, cd2)); // => false

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
// assertEqual(ab.a, ba.a); // true statement

console.log(eqObjects(ab, ba)); // => true

const abc = {a: '1', b: '2', c: '3'};
console.log(eqObjects(ab, abc)); // => false
