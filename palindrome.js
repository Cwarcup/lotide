const palindrome = function(str) {
  let reversed = str.toLowerCase().replace(/\s/g, '').split('').reverse().join('');
  return str.toLowerCase().replace(/\s/g, '') === reversed;
};

module.exports = palindrome;