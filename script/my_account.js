document.addEventListener('DOMContentLoaded', function () {
	show_count = 0
    const buttons = document.querySelector('.account_actions');

    const button_logout = buttons.childNodes[buttons.childNodes.length-2];
    const view_purchase_history = buttons.childNodes[buttons.childNodes.length-4];
    const change_pass_button = buttons.childNodes[buttons.childNodes.length-6];
    const edit_profile_button = buttons.childNodes[buttons.childNodes.length-8];

    if (localStorage.getItem('login') === 'false') {
        button_logout.style.display = 'none';
    }
    if (localStorage.getItem('login') === 'true') {
        button_logout.style.display = 'flex';
    }

    button_logout.addEventListener('click', function() {
        localStorage.setItem('login', 'false');
        button_logout.style.display = 'none';
        window.location.href = 'file:///Users/Mac/Desktop/dene/PYTHON/AI/test_00002/testing/src/welcome.html';    
    });

    const body = document.querySelector('body');
    edit_profile_button.addEventListener('click', function() {
        const unvisible_div = document.createElement('div');
        const form_div = document.createElement('div');




        unvisible_div.style.cssText = `
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 2;
        `;
        unvisible_div.addEventListener('click', function() {
            this.remove();
            form_div.remove();
        });

        form_div.style.cssText = `
            display: block;
            color: white;
            left: 25%;
            top: 20%;
            position: fixed;
            width: 35%;
            height: 60%;
            z-index: 3;
            border-radius: 10px;
            background-color: rgba(100, 100, 100, 1);
            padding: 20px;
        `;
        form_div.innerHTML = `
            <div class="cl_1">
                <div class="cl_1_1">
                    <div class="cl_1_1-A">
                        <label for='id'>ID Name:</label>
                        <input type="text" id='id' name="id">
                        <label for='mail'>Mail:</label>
                        <input type="email" id='mail' name="mail">
                        <label for='phone'>Phone:</label>
                        <input type="tel" id='phone' name="phone">
                        <button class="submitBtn">OK</button>
                    </div>
                </div>
            </div>
        `;

        input_id = form_div.querySelector('#id    ')
        mail_id  = form_div.querySelector('#mail  ')
        phone_id = form_div.querySelector('#phone ')
        input_id.value = localStorage.getItem('username')
        mail_id.value = localStorage.getItem('email')
        phone_id.value = localStorage.getItem('phone')

        const submitBtn = form_div.querySelector('.submitBtn');
        submitBtn.addEventListener('click', function() {
        	localStorage.setItem('username',input_id.value)
        	localStorage.setItem('email',mail_id.value)
        	localStorage.setItem('phone',phone_id.value)

        	username_t = document.querySelector('.my_acc_username');
        	email_t	 = document.querySelector('.my_acc_email');
        	phone_t 	 = document.querySelector('.my_acc_phone');
        	username_t.innerHTML = input_id.value;
        	email_t.innerHTML    = mail_id.value;
        	phone_t.innerHTML    = phone.value;
        	console.log('testing')
        	console.log('testing0000')
            unvisible_div.remove();
            form_div.remove();
        });

        body.insertAdjacentElement('afterbegin', unvisible_div);
        body.insertAdjacentElement('afterbegin', form_div);
    });

    change_pass_button.addEventListener('click', function(){

    	const body = document.querySelector('body');
		const unvisible_div = document.createElement('div');
        const form_div = document.createElement('div');




        unvisible_div.style.cssText = `
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 2;
        `;
        unvisible_div.addEventListener('click', function() {
            this.remove();
            form_div.remove();
        });

        form_div.style.cssText = `
            display: block;
            color: white;
            left: 25%;
            top: 20%;
            position: fixed;
            width: 35%;
            height: 60%;
            z-index: 3;
            border-radius: 10px;
            background-color: rgba(100, 100, 100, 1);
            padding: 20px;
        `;
        form_div.innerHTML = `
            <div class="cl_1">
                <div class="cl_1_1">
                    <div class="cl_1_1-A">

                        <label id= for='cur_password'>current password</label>
                        <input type="password" id='cur_password' class='cur_password' name="id">

                        <label for='new_password'>new password</label>
                        <input type="password" id='new_password' class='new_password' name="mail">

                        <label for='new_pass_ag'>new password again</label>
                        <input type="password" id='new_pass_ag' class='new_pass_ag' name="phone">

                        <button class="submitBtn">OK</button>
                    </div>
                </div>
            </div>
        `;



        cur_password_id  = form_div.querySelector('.cur_password')
        new_password_id  = form_div.querySelector('.new_password')
        new_pass_ag_id	 = form_div.querySelector('.new_pass_ag')


        old_password 	 = localStorage.getItem('password')
        submitBtn  		 = form_div.querySelector('.submitBtn');
        submitBtn.addEventListener('click', function(){

	        cur_password 	 = cur_password_id.value
	        new_password 	 = new_password_id.value
	        new_pass_ag 	 = new_pass_ag_id.value
	        if (  new_password == new_pass_ag  && cur_password == old_password && new_pass_ag!=''&&new_pass_ag_id!='' ){
	        	localStorage.setItem('password', cur_password);

	            unvisible_div.remove();
	            form_div.remove();
	        }

        })



        body.insertAdjacentElement('afterbegin', unvisible_div);
        body.insertAdjacentElement('afterbegin', form_div);

    });
	purchase_panel = document.querySelector('.account_container_1')
    purchase_panel.style.display = 'none';
    view_purchase_history.addEventListener('click',function(){
    	
    	if( show_count == 0 ){
	    	purchase_panel.style.display = 'none';
	    	show_count = 1;
    	}
    	else{
	    	purchase_panel.style.display = 'flex';
	    	show_count = 0;
    
    	}


    })





});