function findOuterLink() {
	var referenceList = document.querySelectorAll('ul>li>a');
	
	for (var i = 0; i < referenceList.length; i++) {
		var tempItem = referenceList[i].innerHTML.split('/');
		
		if(tempItem[0] === 'http:' || tempItem[0] === 'ftp:') {
			referenceList[i].className = 'external-red';
		}
	}
}