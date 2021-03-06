
const input = document.querySelector('.input-text');
const button = document.querySelector('.button-action');

const error = document.querySelector('.msjerror');
const cardpeople = document.querySelector('.cardBox');

const avatar = document.querySelector('.avatar-image');
const user = document.querySelector('.username-profile');

const name = document.querySelector('.real-name');
const city = document.querySelector('.real-location');
const repospublic = document.querySelector('.repos');
const followers = document.querySelector('.followers');

 async function data(){
     try{
        if (input.value == 0){
            return;
        }else{
            // muestra los datos del usuario ingresado
            let username = input.value;
            const data = await fetch (`https://api.github.com/users/${username}`);
            const dataInfo = await data.json();
            input.value = null;
            // si el usuario no existe
            if (dataInfo.login == undefined){
                error.innerHTML = "El usuario no existe";
                cardpeople.style.display = "none";
            } else{
                // si el usuario existe muestra toda la info
                error.innerHTML = null;
                avatar.src = dataInfo.avatar_url;
                user.innerHTML = dataInfo.login;
                user.href =  `https://github.com/${username}`;
                name.innerHTML = dataInfo.name;
                city.innerHTML = dataInfo.location;
                repospublic.innerHTML = dataInfo.public_repos;
                followers.innerHTML = dataInfo.followers;
                cardpeople.style.display = "flex";

            }
        }
       
     } catch (error){
        console.log("ocurrio un error!!!")
        console.log(error);
        error.innerHTML = "Ocurrió un error, intente nuevamente";

     }

 }

 // funcion al hacer click
 function  enter(){
     if(event.keyCode == 13 ){
         return data ();
     }
    
 }

 button.addEventListener("click", data);
 input.addEventListener("keydown", enter);












