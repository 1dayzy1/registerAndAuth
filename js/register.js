import config from "./config.js";

const login = document.querySelector(".input__login");
const mail = document.querySelector(".input__mail");
const pass = document.querySelector(".input__pass");
const message = document.querySelector(".message");
const btnRegister = document.querySelector(".btn_register");


const updateStatus = (status) =>{
    if(status){
        message.textContent = "Успешно!"
    }else{
        message.textContent = "Произошла ошибка!"
    }
}


const submit = async(event) =>{
    event.preventDefault()
    
    // console.log(login.value, mail.value, pass.value);


    const res = await fetch(config.url_api + '/register', {
        method:"POST",
        headers:{
            'Content-type':"application/json"
        },
        body:JSON.stringify({
            login:login.value,
            mail:mail.value,
            password:pass.value,
        })
    })

    const data = await res.json();

    console.log(res);

    updateStatus(res.ok);

    

}


btnRegister.addEventListener('click', (ev) =>{
    submit(ev);

})