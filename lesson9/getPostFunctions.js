function sendUsingGet() {
	var userData = {
		userFirstName : document.getElementById('userFirstNameGet').value,
		userLastName : document.getElementById('userLastNameGet').value,
		userAge : document.getElementById('userAgeGet').value,
		userAddress : document.getElementById('userAddressGet').value,
	};

	if (getValidation(userData)) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "/userGet?userFirstName=" + userData.userFirstName
				+ "&userLastName=" + userData.userLastName + "&userAge="
				+ userData.userAge + "&userAddress=" + userData.userAddress);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send();
	}
}

function sendUsingPost() {
	var userData = {
		userFirstName : document.getElementById('userFirstNamePost').value,
		userLastName : document.getElementById('userLastNamePost').value,
		userAge : document.getElementById('userAgePost').value,
		userAddress : document.getElementById('userAddressPost').value,
	};

	if (postValidation(userData)) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/userPost");
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify(userData));
	}
}

function getValidation(obj) {
	if (isNaN(obj.userAge)) {
		document.getElementById('userAgeGet').value = 'Enter some number !';
		return false;
	} else {
		if (obj.userAge < 1 || obj.userAge > 100) {
			document.getElementById('userAgeGet').value = 'Incorrect entering !';
			return false;
		} else {
			obj.userFirstName += '.ValidatedByGET';
			obj.userLastName += '.ValidatedByGET';
			obj.userAge += '.ValidatedByGET';
			obj.userAddress += '.ValidatedByGET';
			return true;
		}
	}
}

function postValidation(obj) {
	if (isNaN(obj.userAge)) {
		document.getElementById('userAgePost').value = 'Enter some number !';
		return false;
	} else {
		if (obj.userAge < 1 || obj.userAge > 100) {
			document.getElementById('userAgePost').value = 'Incorrect entering !';
			return false;
		} else {
			obj.userFirstName += '.ValidatedByPOST';
			obj.userLastName += '.ValidatedByPOST';
			obj.userAge += '.ValidatedByPOST';
			obj.userAddress += '.ValidatedByPOST';
			return true;
		}
	}
}