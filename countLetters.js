const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  const result = {};
  // using regex to filter only letters
  for (let char of str.toLowerCase().match(/[a-z]/g)) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

assertEqual(countLetters('app')['a'], 1);
assertEqual(countLetters('app')['p'], 2);
