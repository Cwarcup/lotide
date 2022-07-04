# lotide


## `_.countLetters`
- Input: `string`
- Return: An `object` with the **letter** as the key and the **count** as the value.

Syntax:
```js
_.countLetters(string);
```

Example:
```js
const countLetters = _.countLetters('lighthouse in the house');
console.log(countLetters); 
// { l: 3, i: 2, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1, n: 1 }
```

## `_.countOnly`

- Inputs: 
  - `allItemsArray` = `array` of `strings`. 
  - `itemsToCountArray` = `object` with keys that are `strings` and values that are `boolean`.
- Return: An `object` with the **items to be counted** as the key and the **count** as the value.

Synxtax:
```js
_.countOnly(allItemsArray, itemsToCountArray);
```

Example:
```js
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const namesToCount = {Jason: true, Karima: true, Fang: true, Agouhanna: false};

result = countOnly(firstNames, namesToCount);

console.log(result); // {Jason: 1, Fang: 2, Karima: 1}
```