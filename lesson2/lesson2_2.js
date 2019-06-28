"use strict";

var employeeSalaries = {
	"Igor" : 1000,
	"Ivan" : 2000,
	"Oleh" : 3000,
	"Kristina" : 4000
};

var summ = 0;
var counter = 0;

for ( var key in employeeSalaries) {
	counter++;
	summ += employeeSalaries[key];
}

if (counter == 0) {
	console.log(counter);
} else {
	console.log(summ);
}
