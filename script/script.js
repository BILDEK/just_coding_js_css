


//localStorage.setItem('sozgec','bil')
//localStorage.setItem('bilgec','123')
//localStorage.setItem('user','bil')
//localStorage.setItem('password','123')
//localStorage.setItem('contact','example@gmail.com')
//localStorage.setItem('school','00001school')
//localStorage.setItem('language','english')
//localStorage.setItem('tecnical', 'software')
//localStorage.setItem('name','bil')
//localStorage.setItem('surname','dek')
//localStorage.setItem('date','2023-12-31')
//localStorage.setItem('tel', 3343424323);

// var href = window.location.href;










document.addEventListener('DOMContentLoaded', function(){
	// THIS IS ABOUT HIDE-NAVBAR  			AND IT SHOULD BE GLOBAL
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





