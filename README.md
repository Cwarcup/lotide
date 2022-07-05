# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cwarcup/lotide`

**Require it:**

`const _ = require('@cwarcup/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `calculateDayInYear`: Calculates the day of the year for a particular date string. Words on leap years. 
- `countLetters`: Takes in a sentence(string) and returns a count of each letters in the sentence.
- `countOnly`: Returns an object with a count of each element in the input array.
- `eqArrays`: Compares two arrays and returns `true` if they are equal. Returns `false` otherwise.
- `eqObjects`: Compares two objects and returns `true` if they are equal. Returns `false` otherwise.
- `findKey`: Returns the first key for which the callback returns a truthy value in an object.
- `findKeyByValue`: Returns the first key that matches a given value in an object.
- `flatten`: Nested arrays will be flattened into a single array.
- `head`: Returns the first element of an array.
- `join`: Joins all elements of an array into a string.
- `letterPositions`: Takes in a sentence(string) and returns an object with each letter as a key and the index of the letter in the sentence as the value.
- `map`: Takes in an array and a callback and returns a new array with the results of the callback applied to each element.
- `middle`: Returns the middle number in an array. If no middle element is present, returns the average of the two middle elements. Only works on arrays of integers.
- `palindrome`: Returns `true` if the input string is a palindrome. Returns `false` otherwise. Works on strings containing capitals, lower cases, and spaces.
- `pigLatin`: Takes in a string and returns a Pig Latin version of the string. Rules of Pig Latin [here](https://web.ics.purdue.edu/~morelanj/RAO/prepare2.html).
- `tail` : Returns the last element of an array.
- `takeUntil`: Takes in an array and a callback and returns an array with the elements of the array until the callback returns a truthy value.
- `without`: Takes in an array and a value and returns an array with all the elements that do not match the value.