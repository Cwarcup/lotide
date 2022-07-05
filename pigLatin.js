// converts any argument into piglatin

// words beginning with consonant sounds are moved to the end of the word and appended with "ay"
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// consonant clusters
// when at the beginning, the letters are grouped at the end
const consonantClusters = ['bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'str', 'sw', 'th', 'tr', 'tw', 'wh', 'wr', 'sch', 'scr', 'shr', 'spl', 'spr', 'squ', 'str', 'thr'];

// words that begin with vowels are moved to the end of the word and appended with "yay"
const vowels = ['a', 'e', 'i', 'o', 'u'];

const pigLatin = (str) => {
  let result = '';
  let beginning = '';
  let ending = '';
  let split = str.split(' ');
  for (const word of split) {
    beginning = word.substring(0, 1);
    ending = word.substring(1);
    if (consonants.includes(beginning)) {
      result += ending + beginning + 'ay ';
    } else if (consonantClusters.includes(beginning)) {
      result += ending + beginning + 'ay ';
    } else if (vowels.includes(beginning)) {
      result += word + 'yay ';
    }
  }
  return result.trim();
};

module.exports = pigLatin;