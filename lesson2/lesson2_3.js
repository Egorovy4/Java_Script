"use strict";

function toDoOperation(x, operation, y) {
	if (!isFinite(x) || !isFinite(y)) {
		try {
			throw new Error("Incorect variables entering !");
		} catch (e) {
			console.log(e);
		}
	} else {
		if (operation == "+") {
			return x + y;
		} else if (operation == "-") {
			return x - y;
		} else if (operation == "*") {
			return x * y;
		} else if (operation == "/") {
			return x / y;
		} else {
			try {
				throw new Error("Incorect operation entering !");
			} catch (e) {
				console.log(e);
			}
		}
	}
}

console.log(toDoOperation(1, "/", 2));
