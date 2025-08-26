//mapa: hashMap, diccionario, TreMap
/*
let persona = {
    nombre: "jhon",
    apellido: "mendez",
    edad: 25,
}

*/

let estudiante = new Map();
estudiante.set("nombre", "jhon");
estudiante.set("apellido", "mendez");
estudiante.set("edad", 45);
estudiante.set("correo", "XXXXXXXXXXXXXX");
console.log(estudiante);
console.log(estudiante.get("nombre"));
console.log(estudiante.has("correo"));

estudiante.forEach((valor, clave) => {
  console.log(`clave: ${clave}, valor: ${valor}`);
});
