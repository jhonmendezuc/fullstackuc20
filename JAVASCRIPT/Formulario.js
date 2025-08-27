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

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let edad = document.getElementById("edad");
let tipoUsuario = document.getElementById("tipo-usuario");
let btnEnviar = document.getElementById("btn-enviar");
let tablaUsuario = document.getElementById("tabla-usuarios");

let usuarios = [];

btnEnviar.addEventListener("click", () => {
  let nombreValue = nombre.value;
  let apellidoValue = apellido.value;
  let correoValue = correo.value;
  let edadValue = edad.value;
  let tipoUsuarioValue = tipoUsuario.value;
  let usuarioNuevo;
  if (tipoUsuarioValue == "estudiante") {
    usuarioNuevo = new Estudiante(
      nombreValue,
      apellidoValue,
      correoValue,
      edadValue
    );
  } else if (tipoUsuarioValue == "profesor") {
    usuarioNuevo = new Profesor(
      nombreValue,
      apellidoValue,
      correoValue,
      edadValue
    );
  } else if (tipoUsuarioValue == "administrativo") {
    usuarioNuevo = new Administrativo(
      nombreValue,
      apellidoValue,
      correoValue,
      edadValue
    );
  }
  usuarios.push(usuarioNuevo);
  actualizarTabla();
  //localStorage.setItem("usuarios", JSON.stringify(usuarios));
  //sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
});

function actualizarTabla() {
  tablaUsuario.innerHTML = "";
  usuarios.forEach((usuario) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${usuario.nombre}</td>
      <td>${usuario.apellido}</td>
      <td>${usuario.getCorreo()}</td>
      <td>${usuario.edad}</td>
      <td>${usuario.constructor.name}</td>
      <td> ❌ </td>
    `;
    tablaUsuario.appendChild(fila);
  });
}

/*
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
}); */
