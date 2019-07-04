function hideShowInnerList() {
	if (document.querySelector('li>ul').className == '') {
		document.getElementById('hide-show').innerHTML = 'Show inner list';
	} else {
		document.getElementById('hide-show').innerHTML = 'Hide inner list';
	}
	document.querySelector('li>ul').classList.toggle('displayNone');
}