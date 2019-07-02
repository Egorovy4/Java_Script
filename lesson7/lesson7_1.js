function addToList() {
	var list = document.querySelectorAll('ul>li');
	for (var i = 0; i < list.length; i++) {
		list[i].innerHTML = 'Item ' + i;
	}
}

function countItem() {
	var list = document.querySelectorAll('ul>li');
	var quantityOfItem = document.getElementById('count-item-result');
	quantityOfItem.innerHTML = 'Quantity of list item: ' + list.length;
}