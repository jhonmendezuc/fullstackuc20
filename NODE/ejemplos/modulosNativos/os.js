const os = require("node:os");
// muestra la cantidad de nucleos del procesador
console.log(os.cpus());
// muestra la memoria libre del sistema
console.log(os.freemem());
// muestra la arquitectura del procesador
console.log(os.arch());
// muestra la memoria total del sistema
console.log(os.totalmem());
