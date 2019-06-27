"use strict";

let login, password;

login = prompt("Who's there?", "login...");

switch (login) {
	case "Admin":
		password = prompt("Password?", "password...");
		switch (password) {
			case "TheMaster":
				alert("Welcome!");
				break;
			case null:
				alert("Canceled.")
				break;
			default:
				alert("Wrong password");
				break;
		}
		break;
	
	case null:
		alert("Canceled.");
		break;
	default:
		alert("I don't know you");
}