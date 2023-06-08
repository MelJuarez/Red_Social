
let user_social = "https://jsonplaceholder.typicode.com/users"; //Api usuarios

/*let detalles_user = `
    <div class="otros">
                <img class="U" src="./img/usuario.png" alt="">

                <div class="icons">
                    <img src="./img/compartir.png" alt="">
                    <img src="./img/comprobar.png" alt="">
                    <button><h3>follow</h3></button>
                </div>
    </div>
`;
let caja_user = document.querySelector(".user");
caja_user.innerHTML = detalles_user;*/


async function cargando_users (perfil){

    try{
    let obtenerUser = await fetch (perfil);
    let dato = await obtenerUser.json();

    let BoxUser = document.querySelector(".user");
    let div = document.createElement("div");
    div.classList.add("Usuario");

    div.innerHTML = "<h2>"+dato[8]["name"]+"</h2>"+
                    "<h4>"+"@"+dato[8]["username"]+"</h4>"
    BoxUser.appendChild(div);

   // console.log("ola")
   //console.log("Nombre "+dato[8]["name"]);  

    }catch{
        alert("Error")
    }
}


cargando_users(user_social);