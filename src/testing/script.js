//localStorage.getItem('loggedIn');
//localStorage.getItem
//            .setItem
//            .clear
//            .removeItem



const localUsername = 'ad';
const localPassword = '123';


function login() {
    name_val = document.querySelector(`input[type='text']`).value;
    pass_val = document.querySelector(`input[type='password']`).value;
    p_testing = document.createElement('p');

    p_testing.style     =   `
                            position:fixed;
                            align-self: center;
                            width: 50%;
                            top: 70%;
                            padding:10px 20px;
                            background-color:#cec218;
                            border-radius:5px;
                            color:white;`
    document.querySelector('body').appendChild(p_testing);

    if ( localUsername === name_val && localPassword == pass_val ){
        localStorage.setItem('login_on','true');
        localStorage.setItem('user', 'localUsername');
        p_testing.style.top = '50%';
        p_testing.innerHTML = 'icerdesin sayın '+name_val
        setTimeout(function(){
            document.querySelectorAll('body p').forEach( el =>{ el.remove(); })
        }, 3000)

        document.querySelectorAll('input').forEach( el => { el.style.display = 'none';})
        document.querySelector('button.login').style.display = 'none';
        document.querySelector('button.logout').style.display = 'block';
        document.querySelector('.container h2').style.display = 'none';


        
    }else{
        
        p_testing.innerHTML = 'yanlis kullanici adi yada ismi';
        setTimeout(function(){
            document.querySelectorAll('body p').forEach( el =>{ el.remove(); })
        }, 3000)
    }
    
    

}

function logout(){

    localStorage.setItem('login_on', 'false');

    p_testing = document.createElement('p');
        
    p_testing.style     =   `
                            position:fixed;
                            align-self: center;
                            width: 50%;
                            top: 70%;
                            padding:10px 20px;
                            background-color:#cec218;
                            border-radius:5px;
                            color:white;
                            `
    p_testing.innerHTML = 'you are out right now !!!!';

    document.querySelector('body').appendChild(p_testing);

    setTimeout(function(){
            document.querySelectorAll('body p').forEach( el =>{ el.remove(); })
        }, 3000)


    document.querySelectorAll('input').forEach( el => { el.style.display = 'flex';})
    document.querySelector('button.login').style.display = 'block';
    document.querySelector('.container h2').style.display = 'block';
    document.querySelector('button.logout').style.display = 'none';


}


window.onload = function(){

    login__ = localStorage.getItem('login_on')
        
    if (login__){
        p_testing = document.createElement('p');
            
        p_testing.style     =   `
                            position:fixed;
                            align-self: center;
                            width: 50%;
                            top: 50%;
                            padding:10px 20px;
                            background-color:#cec218;
                            border-radius:5px;
                            color:white;
                                `
        p_testing.innerHTML = 'your still in there !!!!';
        document.querySelector('body').appendChild(p_testing);

        setTimeout(function(){p_testing.remove()},3000);


        document.querySelectorAll('input').forEach( el => { el.style.display = 'none';})
        document.querySelector('button.login').style.display = 'none';
        document.querySelector('.container h2').style.display = 'none';


    }
}





















