"use strict";

var user = {};
user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";

console.log(user);

user.name = "СЕРГІЙ";

console.log(user);

delete user.name;

console.log(user);