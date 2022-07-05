// helper function to create character map
function createCharMap(str) {
  let obj = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}

function anagram(str1, str2) {
  // create objects of each string using helper function
  const obj1 = createCharMap(str1);
  const obj2 = createCharMap(str2);

  // compare the number of keys in each object
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  //compare characters in each object
  for (let char in obj1) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagram;