const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['first', 'second', 'third']), 'first');
assertEqual(head([]), undefined);
