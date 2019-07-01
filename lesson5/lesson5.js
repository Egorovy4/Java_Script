"use strict";

function makeBuffer() {
	var str = '';

	return {
		add : function(value) {
			str += value.toString();
		},
		print : function() {
			return str;
		},
		clear : function() {
			str = '';
		}
	};
}

var buffer = makeBuffer();

buffer.add(1);
buffer.add('. До ');
buffer.add('очищення ');
buffer.add('!');

console.log(buffer.print());

buffer.clear();
console.log(buffer.print());

buffer.add(2);
buffer.add('. Після очищення !');
console.log(buffer.print());