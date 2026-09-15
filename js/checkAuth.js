import config from "./config.js";

const checkAuth = async() =>{
    const token = localStorage.getItem("token");

    if(!token){
        console.log("Токен отсутсвует");
        return
    }

    const res = await fetch(config.url_api + '/auth_me',{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })

    const data = await res.json();

    console.log(data);

    if(data.login){
        window.location.href = 'https://frontendbyheart.ru/';
        return
    }

}

checkAuth();