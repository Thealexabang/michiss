const URL = "https://api.thecatapi.com/v1/images/search"
const boton = document.getElementById("boton");
const imagen = document.getElementById("image")
const container = document.getElementById("contenedorDeMichis");

async function loadImage(){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        const imageUrl = data[0].url;

        imagen.src = imageUrl;
    } catch(e){
        console.log(e);
    }
}

boton.addEventListener("click", loadImage);
