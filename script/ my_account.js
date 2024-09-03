



document.addEventListener('DOMContentLoaded', function () {
	button_logout = document.querySelector('.account_actions');
	button_logout = button_logout.childNodes[button_logout.childNodes.length-2];
	if ( localStorage.getItem('login') == 'false'){
		button_logout.style.display = 'none';
	}
	if ( localStorage.getItem('login') == 'true'){
		button_logout.style.display = 'flex';
	}



})