const letterPosition = (str) => {
  const result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char.match(/[a-z]/g)) {
      if (result[str[i]]) {
        result[str[i]].push(i);
      } else {
        result[str[i]] = [i];
      }
    }
  }
  return result;
};

module.exports = letterPosition;