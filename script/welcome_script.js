




// /Users/Mac/Desktop/dene/PYTHON/AI/test_00002/testing/images/img_10.jpeg

document.addEventListener('DOMContentLoaded', function() {


	//testing_0 = JSON.parse(localStorage.getItem('images'))





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



		unvisible = document.createElement('div')
		unvisible.style.cssText = `
			position:fixed;
			left: 0;
			top: 0;
			width:80%;
			height:100%;
			justifySelf:flexstart;
			
			background-color : rgb(0,0,0,0.0);

		`;

    	unvisible.addEventListener('click', function(){
			
		    control_hide = 0;
		    hideNav.style.right = '-220px';
		    hideNav.style.paddingLeft = '85px';
			this.remove();

		})


		hideNav.insertAdjacentElement('afterend',unvisible)





	  } 
	  else{
	    control_hide = 0;
	    hideNav.style.right = '-220px';
	    hideNav.style.paddingLeft = '85px'
	  }
	});




	// logout_i block = 'flex'
	logout_a = document.querySelector('.initial_hide_nav');
	logout_a.innerHTML = logout_a.innerHTML + "<li><a>LOGIN</a></li>"
	logout 	 = logout_a.children[5]
	login 	 = logout_a.children[6]

	login.addEventListener('click',function(){

		login_div  = document.createElement('div');
		login_back = document.createElement('div');

		login_div.style.cssText = `
			position : fixed;
			top :10%;
			left:20%;
			width :60%;
			height:60%;
			border-radius:10px;
			z-index: 2;
			background-color:rgb(0,0,0,0.9);
			color:white;
		`
		login_back.style.cssText = `
			position : fixed;
			top :1%;
			left:1%;
			width :100%;
			height:100%;
			z-index: 1;
			background-color:rgb(0,0,0,0.3);
		`
		login_div.innerHTML = `
			

			<div class="cl_1">
				
				<div class="cl_1_1">
					<div class="cl_1_1-A">

						<label for='id' name='id'>id name</label>
						<input type="text" id='id' name="id">


						<label for='password' name='password'>password</label>
						<input type="password" id='password' name="password">

					</div>
					<button>OK</button>
				</div>

				<div class="cl_1_2">
					<h1>We improve ourself.</h1>
					<img src="/Users/Mac/Desktop/dene/PYTHON/AI/test_00002/testing/images/img_0.jpg">
				</div>

			</div>


		`;
		login_back.addEventListener('click',function(){
			this.remove();     
			login_div.remove();
		});



		this.insertAdjacentElement('afterend',login_div);
		this.insertAdjacentElement('afterend',login_back);

		inputs   	= document.querySelectorAll('.cl_1_1 input')
		log_button  = document.querySelector('.cl_1_1 button')
		login_div.addEventListener('keydown',function(event){

			if(event.key=='Enter'){
				console.log('enter rrrrr')
				log_button.click();	
			}
			
		})
		log_button.addEventListener('click',function(){

			id_name  	= localStorage.getItem('name')
			password 	= localStorage.getItem('password') 
			if(inputs[0].value == id_name && inputs[1].value == password){
				localStorage.setItem('login','true')
				console.log('giris.')
				login_div.remove();
				login_back.remove()
				logout.style.display = 'block';
				login.style.display  = 'none';
				location.reload();
			}

		})




	});

	logout.addEventListener('click', function(){
		localStorage.setItem('login','false');
		this.style.display 	= 'none';
		login.style.display = 'block';
		location.reload()

	})

	if (localStorage.getItem('login') === 'true') {
	    login.style.display = 'none';
	    logout.style.display = 'flex';
	} else {
	    login.style.display = 'flex';
	    logout.style.display = 'none';

		temproray_link_list = []
		child_list = Array.from(hideNav.children);
		child_list = child_list.slice(0, child_list.length-2);
		child_list.forEach( (elm) => {
	    	elm.children[0].href = '#';
		});






	}





	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////













	buttons = document.querySelectorAll('.exit');

	buttons.forEach(function(button){
		button.addEventListener('click', function(){
			button.parentElement.parentElement.remove();
		});
	});



	news = document.querySelectorAll('.testing_002');

	gimme_num_for_show = news.length
	current_index 		= 1
	cycle 				= 0 
	if ( current_index <= Number(localStorage.getItem('images_len')) ){



		get_more 		 		= document.createElement('button');
		get_more.innerHTML 		= '..MORE..';
		get_more.style.cssText  = `
								left:35%;
								margin-top:20px`;
		element_for_but			= document.querySelector('.testing_002_1');
		element_for_but.appendChild(get_more)

		get_more.addEventListener('click', function(){
			images = JSON.parse( localStorage.getItem('images'))

			new_s_one 		= news[0].cloneNode(true);
			new_s_one_img 	= images[current_index]['url'];
			new_s_one_text  = images[current_index]['text'];
			new_s_one.childNodes[1].src 		=new_s_one_img 	
			new_s_one.childNodes[3].textContent =new_s_one_text 


			this.insertAdjacentElement('beforebegin',new_s_one)
			current_index 		+= 1;
			cycle 				+= 1
			if( 	cycle ==  Number(localStorage.getItem('images_len'))){
				get_more.style.display = 'none';

			}


		})



	}











});

