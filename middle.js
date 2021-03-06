const middle = (arr) => {
  // edge case when arr has less than 3 items
  if (arr.length < 3) return [];

  // get middle index of array
  const middleIndex = Math.floor(arr.length / 2);

  // if true (1), return first
  // if false (even length) (0), return second option
  return arr.length % 2 ? [arr[middleIndex]] : [arr[middleIndex - 1], arr[middleIndex]];
};

module.exports = middle;