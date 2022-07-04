//  return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = (str) => {
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

module.exports = letterPositions;

// const res = letterPositions('lighthouse in the house');
// console.log(res);
// // {
// //   l: [0],
// //   i: [1, 11],
// //   g: [2],
// //   h: [3, 5, 15, 18],
// //   t: [4, 14],
// //   o: [6, 19],
// //   u: [7, 20],
// //   s: [8, 21],
// //   e: [9, 16, 22],
// //   n: [12]
// // }
