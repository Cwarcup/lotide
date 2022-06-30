const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = (object1, object2) => {
  //get arr of keys for each object
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);

  // if object keys differ in number
  if (keysObj1.length !== keysObj2.length) {
    return console.log(false);
  }

  // iterate through one of the keys arr
  for (let key in keysObj1) {
    // if keys of each object do not match
    if (object1[key] !== object2[key]) {
      return console.log(false);
    }
  }
  return console.log(true);
};

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
assertEqual(ab.a, ba.a); // true statement

eqObjects(ab, ba); // => true

const abc = {a: '1', b: '2', c: '3'};
eqObjects(ab, abc); // => false
