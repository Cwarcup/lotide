const findKey = (object, callback) => {
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;
