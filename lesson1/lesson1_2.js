"use strict";

let login, password;

login = prompt("Who's there?", "login...");

if (login == "Admin") {
	password = prompt("Password?", "password...");
	if (password == "TheMaster") {
		alert("Welcome!");
	} else if (password == null) {
		alert("Canceled.");
	} else {
		alert("Wrong password");
	}
} else if (login == null) {
	alert("Canceled.");
} else {
	alert("I don't know you");
}
