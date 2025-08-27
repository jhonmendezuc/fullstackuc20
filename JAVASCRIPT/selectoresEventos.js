/*
selector: elementos o componentes de html
DOM: Document Object Model
*/

let selectorClase = document.getElementsByClassName("entrada-txt");
console.log(selectorClase);
let selectorEtiqueta = document.getElementsByTagName("input");
console.log(selectorEtiqueta);
let nombreTxt = document.getElementById("nombre");
console.log(nombreTxt);
let apellidoTxt = document.querySelector("#apellido");
console.log(apellidoTxt);
let titulo = document.querySelector("h3");

//MANIPULACION DOM (CRUD)
//CREATE, READ, UPDATE, DELETE
selectorClase[0].style.color = "red"; //CREATE CSS
selectorClase[0].style.fontSize = "16px";
console.log(titulo.innerText); //READ
console.log(titulo.innerHTML);
titulo.innerHTML = " <p>Nuevo <b> titulo </b>"; //UPDATE
//titulo.innerText = "Hola mundo";
//titulo.remove(); //eliminar elemento

//crear nuevos nodos o componentes
/*
1. ¿que quiero renderizar?
2. ¿dónde quiero renderizar?
3. renderizar
*/
let tituloNuevo = document.createElement("h1"); //quiero renderizar un titulo
tituloNuevo.innerHTML = "Titulo Nuevo";
let app = document.getElementById("app"); //donde lo quiero renderizar
console.log(tituloNuevo);
console.log(app);
app.appendChild(tituloNuevo); //renderizar

function evento() {
  selectorClase[0].style.background = "red";
}

tituloNuevo.addEventListener("click", evento);
titulo.addEventListener("click", () => {
  selectorClase[0].style.background = "";
});
