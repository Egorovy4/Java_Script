"use strict";

var student1 = { yearOfStuding: 1996, facultyName: 'Ihor' };
var student2 = { yearOfStuding: 1997, facultyName: 'Anton' };
var student3 = { yearOfStuding: 1998, facultyName: 'Bohdan' };
var student4 = { yearOfStuding: 1999, facultyName: 'Volodymyr' };
var student5 = { yearOfStuding: 2000, facultyName: 'Halyna' };
var student6 = { yearOfStuding: 2001, facultyName: 'Dmytro' };
var student7 = { yearOfStuding: 2002, facultyName: 'Edvard' };
var student8 = { yearOfStuding: 2003, facultyName: 'Yevhen' };
var student9 = { yearOfStuding: 2004, facultyName: 'Janna' };
var student0 = { yearOfStuding: 2019, facultyName: 'Zlata' };


var myArray = [];
myArray.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student0);

console.log(myArray);
console.log();

var names = myArray.map(function(object) {
	return object.facultyName;
});

console.log('ArrayOfNames: ' + names + '\n');

var summaryYearOfStudying = myArray.reduce(function(summ, item){
	return summ += item.yearOfStuding;
}, 0);

console.log('Summary Year Of Studying: ' + summaryYearOfStudying);