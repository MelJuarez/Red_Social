
let api_url = "https://jsonplaceholder.typicode.com/posts"


//Promesa
async function actualizaGato(api){

    //Try: Si funciona
    try{ // la respuesta (await: ejecutar una consulta, recuperar respuesta) a la consuta (fetch: consultar una dirección)
    let obtener = await fetch(api); //La función fetch consiste en consultar la función api_url
    let dato = await obtener.json(); //Archivo tipo json
    let caja = document.querySelector(".box_post")

    dato.forEach(element =>{
      
        let div = document.createElement("div")
        
        div.innerHTML = "<h3>"+element["title"]+"</h3>" + 
                        "<br></br>Contenido:  "+element["body"];
        div.classList.add("post")
        caja.appendChild(div);
    
       // console.log("\n/////////////////////////////////////////////////////////////")
       // console.log("Título:  "+element["title"]);
       // console.log("\n Contenido:  "+element["body"]);
    })
   
    //buscar_dato(dato);    
    }
    //Catch si no funciona
    catch{
      alert("Error xd")
    }
  }
  actualizaGato(api_url)