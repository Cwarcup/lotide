const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to return the first item of an array
const head = function(array) {
  return array[0]
}

// test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['first', 'second', 'third']), 'first');
assertEqual(head([]), undefined);