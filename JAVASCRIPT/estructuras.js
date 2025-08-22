//estructuras datos: coleccion(listas, conjuntos, mapas, arboles, colas, pilas)
// cojuntos, listas, mapas
let cadena = "hola";
let calificaciones = [4.0, 5.0, 4.5, 3.5];
cadena[0] = "i"; //LAS CADENAS SON INMUTABLES
calificaciones[0] = "i"; //ARRAYS SON MUTABLES
calificaciones[2] = true; //ARRAYS SON MUTABLES
calificaciones[3] = cadena; //ARRAYS SON MUTABLES
console.log(cadena[0]);
console.log(calificaciones[0]);
console.log(calificaciones);
console.log("-------------");

let frutas = ["🥭", "🍍", "🍓", "🍓", "🍏", "🍌"];
console.log(frutas[0]);
frutas[0] = "🥑";
console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] == "🍓") {
    console.log(frutas[i]);
  }
}
console.log("------------+-");

//map: devuelve es otro array
const frutasNuevas = frutas.map((fruta) => {
  return fruta + "🍺";
});
console.log(frutasNuevas);
console.log("------------+-");
//filter: devolver otro array filtrado
const frutasFiltradas = frutas.filter((fruta) => fruta == "🍓");
console.log(frutasFiltradas);
//find: devolver un solo dato
const Busquedafruta = frutas.find((fruta) => fruta == "🍓");
console.log(Busquedafruta);

//poner una nueva fruta al final
frutas.push("🍉");
frutas.push("🍏");
console.log(frutas);
//eliminar el ultimo elemento
frutas.pop();
console.log(frutas);
//agregar al inicio una fruta
frutas.unshift("🍉");
console.log(frutas);

console.log(frutas.includes("🍉"));
console.log(frutas.includes("🎃"));

if (frutas.includes("🍉")) {
  console.log("si existe una sandia");
  console.log(frutas[frutas.indexOf("🍉")]);
} else {
  console.log("no existe sandia");
}

console.log(frutas.join(" 🍺 --"));

const clientes = [
  {
    nombre: "jhon",
    apellido: "mendez",
    edad: 25,
  },
  {
    nombre: "juan",
    apellido: "perez",
    edad: 10,
  },
];

const mayoresEdad = clientes.filter((cliente) => cliente.edad >= 18);
const menonesEdad = clientes.filter((cliente) => cliente.edad < 18);
console.log(mayoresEdad);
console.log(menonesEdad);
