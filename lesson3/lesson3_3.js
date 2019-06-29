"use strict";

function find(arr, value) {
	var counter = 0;
	for ( var temp in arr) {
		if (arr[temp] === value) {
			return counter;
		} else {
			counter++;
		}
		if (counter == arr.length) {
			return -1;
		}
	}
}
