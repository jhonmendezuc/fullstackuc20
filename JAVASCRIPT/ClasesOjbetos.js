//clases y objetos ->paradigma de programaci'on
//clase: molde o plantilla. contiene atributos
//objeto: elemento
class Estudiante {
  constructor(nombre, apellido, edad) {
    this.nombreClase = nombre;
    this.apellidoClase = apellido;
    this.edadClase = edad;
  }
}

//let estudiante1 = new Estudiante("jhon", "mendez", 25);
let estudiante = new Estudiante("jhon", "mendez", 45, "jhon@gmail.com");
console.log(estudiante);

//crear objetos literales
let Profesor = {
  nombre: "jhon",
  apellido: "mendez",
  edad: 45,
};

//crear objetos usando Object

let Persona = new Object();
Persona.nombre = "jhon";
Persona.apellido = "mendez";
Persona.edad = 45;
Persona.correos = ["jhon@gmail.com", "jhon@yahoo.es"];
Persona.mostrarDatos = () => {
  console.log("mostrar datos");
};

console.log(Persona);
console.log(Persona.nombre);
console.log(Persona["nombre"]);

// crear objetos con funciones

function Usuario(correo, contrasena) {
  this.correo = correo;
  this.contrasena = contrasena;
}

let usuario = new Usuario("XXXXXXXXXXXXXX", "123456");
console.log(usuario);
