//ciclos: inicio, condicion, incremento
//while
//dowhile
//for

//while
let vueltas = 0;
console.log(`inicio: ${vueltas}`);
while (vueltas == 30) {
  vueltas = vueltas + 1;
  console.log(`intermedio: ${vueltas}`);
}
console.log(`fin: ${vueltas}`);

console.log("--------------");

//do while
let vueltas2 = 0;
console.log(`inicio: ${vueltas2}`);
do {
  vueltas2 = vueltas2 + 1;
  console.log(`intermedio: ${vueltas2}`);
} while (vueltas == 30);
console.log(`fin: ${vueltas2}`);

console.log("--------------");
//for: compacta de escribir un ciclo
console.log(`inicio: `);
for (let i = 0; i < 3; i++) {
  console.log(`intermedio: ${i}`);
}
console.log(`fin:`);

const header = "HOLA";
console.log(header[2]);
console.log(header.toLocaleLowerCase());
console.log(header.split(" "));
console.log(header.trim(" "));
console.log(header.length);
for (let i = 0; i < header.length; i++) {
  console.log(header[i]);
}
