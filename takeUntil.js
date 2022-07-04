// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = (arr, cb) => {
  const result = [];

  for (let item of arr) {
    if (!cb(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;