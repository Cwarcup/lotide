// return an object with the letter as the key and the count as the value.
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

module.exports = countLetters;