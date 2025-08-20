/* esto es un comentario */
/*
literales - variables
condicionales
funciones
ciclos
estructuras datos
objetos
*/

//variables
let saludo = "hola todos 🙃";
var nombre = "jhon";
nombre = "jhonatan";
const PI = 3.1416;
console.log(5 + "5");
console.log(5 + 5);
console.log(5);
//tipos de datos
/*primitivos*/
let numero = 5; //number
let texto = "hola"; //string
let sesionUsuario = true; //boolean
let plantillaLiteral = `dato: ${numero} sesion: ${sesionUsuario} saludo: ${saludo}`;
let peso = 45.4; //float
let infinito = Infinity; //infinity
let noNumero = NaN; // not a number
let nulo = null;
//debugger; //punto de interrupci'on
let indefinido;
let id = Symbol("id"); //simbolo
//funcion de salida
console.log(saludo);
console.log(nombre);
console.log(typeof texto);
console.log(plantillaLiteral);
console.log(infinito);
console.log(indefinido);
console.log(id);

/* expresiones: operadores(aritmeticos, boleanos, relacion) */
console.log(5 === "5"); //falso
console.log(5 == "5"); //verdadero
console.log(5 !== "5"); //verdadero
console.log(5 > 5); //falso
console.log(5 >= 5); //verdadero
console.log(5 < 5); //falso
console.log(` la suma es:  ${10 + 10}`);
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//condicionales: pregunta->verdadera o falsa
let correo = "jhon@gmail.com";
let contrasena = "123";

function validar() {
  let correoEntrada = document.querySelector("input[type='text']").value;

  let contrasenaEntrada = document.querySelector(
    "input[type='password']"
  ).value;
  //operador ternario ?
  const mensaje =
    sesionUsuario == true ? "sesion iniciada" : "sesion no iniciada";

  if (correo == correoEntrada && contrasena == contrasenaEntrada) {
    console.log("verdadero son iguales");
    sesionUsuario = true;
    console.log(mensaje);
  } else {
    console.log("falso son diferentes");
    console.log(mensaje);
  }
}
