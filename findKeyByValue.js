const findKeyByValue = (object, value) => {
  const objKeysArr = Object.keys(object);

  for (let key of objKeysArr) {
    if (value === object[key]) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;