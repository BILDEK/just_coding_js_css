document.addEventListener('DOMContentLoaded', function(){
	// THIS IS ABOUT HIDE-NAVBAR 
	const hideNav   = document.querySelector('.initial_hide_nav');
	const nav_div_a = document.querySelector('nav div div'); // Geçerli CSS seçici
	var control_hide = 0;

    
	// girdi
	nav_div_a.addEventListener('click', () => {
	  if (control_hide == 0) {
	    control_hide = 1;
	    hideNav.style.right = '0px';
	    hideNav.style.paddingLeft = '0px'



	  } else {
	    control_hide = 0;
	    hideNav.style.right = '-220px';
	    hideNav.style.paddingLeft = '85px'


	  }
	});


});
