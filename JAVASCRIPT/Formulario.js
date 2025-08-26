//abstracción: representar de forma gen'erica un contexto
//encapsulación: proteger los atributos de una clase y acceder a ellos por medio de metodos publicos
class Usuario {
  #correo;
  constructor(nombre, apellido, correo, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#correo = correo;
    this.edad = edad;
  }

  getCorreo() {
    return this.#correo;
  }

  setCorreo(correo) {
    this.#correo = correo;
  }

  cerrarSesion() {
    console.log("cerrando sesión");
  }
  presentarse() {
    return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
  }
}
// herencia: clase hija que agrega comportamientos propios
class Estudiante extends Usuario {
  #promedio;
  constructor(nombre, apellido, correo, edad) {
    super(nombre, apellido, correo, edad);
    this.curso = "fullstack";
    this.#promedio = 4.5;
  }

  getPromedio() {
    return this.#promedio;
  }

  presentarse() {
    return `${super.presentarse()} y soy estudiante`;
  }
}
class Profesor extends Usuario {
  constructor(nombre, apellido, correo, edad) {
    super(nombre, apellido, correo, edad);
    this.curso = "fullstack";
  }

  presentarse() {
    return `${super.presentarse()} y soy profesor`;
  }
}
class Administrativo extends Usuario {
  presentarse() {
    return `${super.presentarse()} y soy administrativo`;
  }
}

let estudiante = new Estudiante("javier", "guzdman", "javier@gmail.com", 22);
let profesor = new Profesor("jhon", "mendez", "jhon@gmail.com", 45);
let administrativo = new Administrativo(
  "maria",
  "gonzalez",
  "maria@gmail.com",
  22
);

console.log(profesor);
console.log(administrativo);

let usuarios = [estudiante, profesor, administrativo];
console.log(usuarios);

usuarios.forEach((usuario) => {
  console.log(usuario.presentarse()); //polimorfismo
  console.log(usuario.getCorreo());
});
