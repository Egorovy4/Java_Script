"use strict";

var myArray = [ -45, 22, 10, 15, 0, 23, -7, -1, 23, 22, 10, 11, -10, -11, 47,
		100, 2000, -1000000, 23, 25, 100 ];

function customSortASC(x, y) {
	return x - y;
}

function customSortDESC(x, y) {
	return y - x;
}

console.log('ASC sorting: ' + myArray.sort(customSortASC) + '\n');
console.log('DESC sorting: ' + myArray.sort(customSortDESC) + '\n');

function getPositiveValue(x) {
	return x >= 0;
}

function getNegativeValue(x) {
	return x < 0;
}

var positiveValues = myArray.filter(getPositiveValue);
var negativeValues = myArray.filter(getNegativeValue);

console.log('positiveValues: ' + positiveValues);
console.log('negativeValues: ' + negativeValues);