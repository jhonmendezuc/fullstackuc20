import FileReader from "node:fs";

console.log("proceso1...");

const usuario = {
  id: 5,
  name: "felipe",
  age: 78,
};
// lectura del archivo json
const usuarios = FileReader.readFileSync("./users.json", "utf-8");
// permite convertir un string(json) a un objeto de javascript
const usuariosJs = JSON.parse(usuarios);
console.log(usuarios[0]);
console.log(usuariosJs[0]);

// permite convertir un objeto de javascript a un string(json)
const usuarioJson = JSON.stringify(usuario);
//escritura del archivo json
FileReader.writeFileSync("./users.json", usuarioJson);
