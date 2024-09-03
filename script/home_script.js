
document.addEventListener('DOMContentLoaded', function(){


	exam_histories_a 	= document.querySelector('.exam_histories_a');
	table_div 		 	= document.querySelector('.table_div');
	dashboard_a 	 	= document.querySelector('.dashboard_a');
	dashboard_show   	= document.querySelector('.Dashboard_show');
	edit_profile_sec 	= document.querySelector('.Edit_profile_div');
	edit_profile_a   	= document.querySelector('.Edit_profile_a');
	change_password_div = document.querySelector('.Change_password');
	change_password_a 	= document.querySelector('.change_password_a');
	logout_a 			= document.querySelector('.logout_a');

	pass_button_ok 		= document.querySelectorAll('.Change_password_button button')[0]

	dashboard_a.classList.add('selecteddd');
	//Edit_profile_a.classList.add('selecteddd');
	//change_password_a.classList.add('selecteddd');
	table_div.style.display        = 'none'
	edit_profile_sec.style.display = 'none';
	dashboard_show.style.display   = 'flex';
	change_password_div.style.display = 'none';


	exam_histories_a.addEventListener('click', function() {
		this.classList.add('selecteddd');
		dashboard_a.classList.remove('selecteddd');
		edit_profile_a.classList.remove('selecteddd');
		change_password_a.classList.remove('selecteddd');

		dashboard_show.style.display 	= 'none';
		edit_profile_sec.style.display  = 'none';
		table_div.style.display 		= 'block';
		change_password_div.style.display 	= 'none';

	})
	dashboard_a.addEventListener('click', function(){
		this.classList.add('selecteddd');
		exam_histories_a.classList.remove('selecteddd');
		edit_profile_a.classList.remove('selecteddd');
		change_password_a.classList.remove('selecteddd');

		dashboard_show.style.display    = 'flex';
		edit_profile_sec.style.display 	= 'none';
		table_div.style.display 		= 'none';
		change_password_div.style.display 	= 'none';

	})
	edit_profile_a.addEventListener('click', function(){
		this.classList.add('selecteddd');
		exam_histories_a.classList.remove('selecteddd');
		dashboard_a.classList.remove('selecteddd');
		change_password_a.classList.remove('selecteddd');

		dashboard_show.style.display    = 'none';
		edit_profile_sec.style.display 	= 'flex';
		table_div.style.display 		= 'none';
		change_password_div.style.display 	= 'none';



		name_in  	= document.querySelector('.edit_001_02 #fullName')
		birth_in 	= document.querySelector('.edit_001_02 #birthDate')
		tel_in   	= document.querySelector('.edit_001_02 #tel')
		school_in	= document.querySelector('.edit_002_02 #school');
		language_in	= document.querySelector('.edit_003_02 #languages');
		spacial_in	= document.querySelector('.edit_004_02 #spacial');


		name_in.value 		= localStorage.getItem('name') +' '+ localStorage.getItem('surname');
		birth_in.value		= localStorage.getItem('date');
		tel_in.value  		= localStorage.getItem('tel');
		school_in.value 	= localStorage.getItem('school');
		language_in.value 	= localStorage.getItem('language');
		spacial_in.value 	= localStorage.getItem('tecnical');

	})
	change_password_a.addEventListener('click', function(){
		this.classList.add('selecteddd');
		exam_histories_a.classList.remove('selecteddd');
		edit_profile_a.classList.remove('selecteddd');
		dashboard_a.classList.remove('selecteddd');

		dashboard_show.style.display    	= 'none';
		edit_profile_sec.style.display 		= 'none';
		table_div.style.display 			= 'none';
		change_password_div.style.display 	= 'flex';

	})
	pass_button_ok.addEventListener('click', function(){

		lastPassword_in = document.querySelector('.password_part #lastPassword');
		new_pass 		= document.querySelector('.password_part #newPassword');
		new_pass_again	= document.querySelector('.password_part #newPasswordAgain');
		password_part_d = document.querySelector('.Change_password');
		real_password   = localStorage.getItem('password');

		if ( lastPassword_in.value != '' && lastPassword_in.value == real_password &&  new_pass.value == new_pass_again.value && new_pass.value != '' && new_pass_again.value != '' ){


			localStorage.setItem('password',new_pass_again.value);
			new_pass_again.value	 = '';			
			new_pass.value 			 = '';  
			lastPassword_in.value	 = '';

			new_p 				= document.createElement('p');
			new_p.textContent 	= 'password updated '+localStorage.getItem('password');
			new_p.style.cssText	= `
				display:flex;
				position: relative;
				bottom: 10%;
				left:5%;
				width: 80%;
				height: 10%;
				justify-content : flex-start;
				align-items		: center;
	        	background-color: rgb(103 ,219 ,107, 0.8);;
				color: white;
				padding:20px 20px;
				margin-top : 10%;
				border-radius:5px;
			`
			password_part_d.append(new_p);
			setTimeout(() => {
				pass_update_war = password_part_d.querySelectorAll('p');
				pass_update_war.forEach((el)=> {
					el.remove()
				})	;
					
			}, 1500);
		}
	})
	logout_a.addEventListener('click',function(){
		localStorage.setItem('login','false');
		window.location.href = 'file:///Users/Mac/Desktop/dene/PYTHON/AI/test_00002/testing/src/welcome.html';
		this.style.display = 'none';
	})




	// THIS IS ABOUT THAT THE BAR OF DASBOARD
	const ctx = document.getElementById('myChart');

	  new Chart(ctx, {
	    type: 'bar',
	    data: {
	      labels: ['Average Score', 'Highest Score', 'Lowest Score'],
	      datasets: [{
	        label: '# of Votes',
	        data: [45.5, 32.5, 50.5, 5, 2, 3],
	        borderWidth: 1
	      }]
	    },
	    options: {
	      scales: {
	        y: {
	          beginAtZero: true
	        }
	      }
	    }
	  });




});
