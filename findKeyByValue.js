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

//Testing
// const bestTVShowsByGenre = {
//   sci_fi: 'The Expanse',
//   comedy: 'Brooklyn Nine-Nine',
//   drama: 'The Wire',
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
