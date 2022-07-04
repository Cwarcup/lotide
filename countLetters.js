
//return a count of each of the letters in that sentence.
const countLetters = (str) => {
  if (str.length === 0) return {};
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

// console.log(countLetters('app')['a']);
console.log(countLetters(''));

module.exports = countLetters;