import dotenv from "dotenv";
import express, { json } from "express";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

//app de express para iniciar y crear el servidor de api
const app = express();

//midleware permite serializar datos json
app.use(json());
//midleware de rutas
app.use(userRoutes);
app.use(taskRoutes);
//puerto de la api
const puerto = process.env.PORT;

//puesta a punto(escucha de peticiones)
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
