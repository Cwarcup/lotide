const conditionalSum = function(values, condition) {
  let result = [];
  values.map((item) => {
    if (condition === 'even') {
      if (item % 2 === 0) {
        result.push(item);
      }
    } else if (condition === 'odd') {
      if (item % 2 !== 0) {
        result.push(item);
      }
    }
  });
  return result.reduce((partialSum, item) => partialSum + item, 0);
};

module.exports = conditionalSum;