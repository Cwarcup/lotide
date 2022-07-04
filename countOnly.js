// countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
const countOnly = (allItems, itemsToCount) => {
  const results = {};
  // loop over the items
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

// const firstNames = [
//   'Karl',
//   'Salima',
//   'Agouhanna',
//   'Fang',
//   'Kavith',
//   'Jason',
//   'Salima',
//   'Fang',
//   'Joe',
// ];

// const result1 = countOnly(firstNames, {Jason: true, Karima: true, Fang: true, Agouhanna: false});

// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);

// console.log(countOnly(firstNames, {Jason: true, Karima: true, Fang: true, Agouhanna: false}));
// // { Fang: 2, Jason: 1 }