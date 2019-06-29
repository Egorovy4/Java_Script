"use strict";

function camelize(str) {
	var array = str.split('-');

	for (var temp = 1; temp < array.length; temp++) {
		array[temp] = array[temp].charAt(0).toUpperCase()
				+ array[temp].slice(1);
	}

	return array.join('');
}

var str = 'my-name-is-igor-iwanyshyn';
console.log(str);

console.log(camelize(str));