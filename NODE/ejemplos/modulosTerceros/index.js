import dotenv from "dotenv";
import express, { json } from "express";

dotenv.config();

//tareas
const tareas = [
  { id: 1, nombre: "tarea 1", estado: "completa" },
  { id: 2, nombre: "tarea 2", estado: "incompleta" },
  { id: 3, nombre: "tarea 3", estado: "incompleta" },
];

//app de express para iniciar y crear el servidor de api
const app = express();
app.use(json());

//puerto de la api
const puerto = process.env.PORT;

//path
app.get("/tareas", (solitud, respuesta) => {
  console.log("se hizo get en tareas");
  respuesta.send(tareas);
});

app.get("/tareas/:id", (solitud, respuesta) => {
  console.log(solitud.params.id);
  const idTarea = solitud.params.id;
  const tareaBusqueda = tareas.filter((tarea) => tarea.id == idTarea);
  if (tareaBusqueda.length == 0) {
    respuesta.json({
      mensaje: "tarea no encontrada",
    });
  }
  respuesta.json({
    mensaje: "tarea encontrada",
    tarea: tareaBusqueda,
  });
});

app.post("/tareas", (req, res) => {
  console.log("se hizo post en tareas");
  console.log(req.body);
  tareas.push(req.body);
  res.json({
    mensaje: "tarea agregada",
    tarea: req.body,
  });
});
//puesta a punto(escucha de peticiones)
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
