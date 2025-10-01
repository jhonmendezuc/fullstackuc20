const tareas = [
  { id: 1, nombre: "tarea 1", estado: "completa" },
  { id: 2, nombre: "tarea 2", estado: "incompleta" },
  { id: 3, nombre: "tarea 3", estado: "incompleta" },
];

const getTask = () => {
  console.log("se hizo get en tareas desde el servicio");
  return tareas;
};

export default {
  getTask,
};
