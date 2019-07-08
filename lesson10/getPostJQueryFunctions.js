$(document).ready(function() {
	$('#getSend').bind('click', function() {
		var userData = {
			userFirstName : $('#userFirstNameGet').val(),
			userLastName : $('#userLastNameGet').val(),
			userAge : $('#userAgeGet').val(),
			userAddress : $('#userAddressGet').val(),
		};
		
		if(getValidation(userData)){
			$.ajax({
				type : 'GET',
				contentType : 'application/json',
				url : "/userGet?userFirstName=" + userData.userFirstName
				+ "&userLastName=" + userData.userLastName + "&userAge="
				+ userData.userAge + "&userAddress=" + userData.userAddress,
				success : function(data) {
					console.log("Success");
					console.log(JSON.stringify(data));
				}
			});
		}
	});
	
	$('#postSend').bind('click', function() {
		var userData = {
			userFirstName : $('#userFirstNamePost').val(),
			userLastName : $('#userLastNamePost').val(),
			userAge : $('#userAgePost').val(),
			userAddress : $('#userAddressPost').val(),
		};
		
		if(postValidation(userData)){
			$.ajax({
				type : 'POST',
				data: JSON.stringify(userData),
				contentType : 'application/json',
				url : "/userPost",
				success : function(data) {
					console.log("Success");
					console.log(JSON.stringify(data));
				}
			});
		}
	});
});

function getValidation(obj) {
	if (isNaN(obj.userAge)) {
		$("#userAgeGet").val("Enter some number !");
		return false;
	} else {
		if (obj.userAge < 1 || obj.userAge > 100) {
			$("#userAgeGet").val("Incorrect entering !");
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
		$("#userAgePost").val("Enter some number !");
		return false;
	} else {
		if (obj.userAge < 1 || obj.userAge > 100) {
			$("#userAgePost").val("Incorrect entering !");
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
