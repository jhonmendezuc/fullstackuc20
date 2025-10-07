import taskService from "../services/taskServices.js";

const getTask = async (req, res) => {
  const data = await taskService.getTask();

  if (data.length === 0) {
    res.status(404).send({
      message: "No hay tareas",
    });
  }

  res.status(200).send({
    message: "Tareas encontradas",
    data: data,
  });
};

const getTaskId = async (req, res) => {
  const idTask = req.params.id;
  const data = await taskService.getTaskId(idTask);
  res.status(200).send({
    message: "Tarea encontrada",
    data: data,
  });
};

const createTask = async (req, res) => {
  const body = req.body;
  const data = await taskService.createTask(body);
  res.status(201).send({
    message: "Tarea creada",
    data: data,
  });
};

export default {
  getTask,
  getTaskId,
  createTask,
};
