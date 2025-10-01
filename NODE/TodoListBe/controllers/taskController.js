import taskService from "../services/taskServices.js";

const getTask = (solitud, respuesta) => {
  const tasks = taskService.getTask();
  respuesta.send(tasks);
};

const getTaskId = (solitud, respuesta) => {
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
};

const createTask = (req, res) => {
  console.log("se hizo post en tareas");
  console.log(req.body);
  tareas.push(req.body);
  res.json({
    mensaje: "tarea agregada",
    tarea: req.body,
  });
};

export default {
  getTask,
  getTaskId,
  createTask,
};
