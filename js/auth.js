import config from "./config.js";

const login = document.querySelector(".auth__login");
const pass = document.querySelector(".auth__pass");
const message = document.querySelector(".message");
const btnAuth = document.querySelector(".auth__btn");


const updateStatus = (status, token) =>{
    if(status){
        message.textContent = "Успешно!";
        localStorage.setItem("token", token);
        window.location = 'https://frontendbyheart.ru/'
    }else{
        message.textContent = "Произошла ошибка!"
    }
}


const auth = async(event) =>{
    event.preventDefault()

    // console.log(login.value, pass.value);

    const res = await fetch(config.url_api + '/auth', {
        method:'POST',
        headers:{
            'Content-type':"application/json"
        },
        body:JSON.stringify({
            login:login.value,
            password:pass.value
        })
    });

    const data = await res.json();
    console.log(res);
    updateStatus(res.ok, data.token);
}

btnAuth.addEventListener('click', (ev) =>{
    auth(ev);
});