import axios from "axios";

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;
let path = `${URL_BACKEND}tareas`;

const getTask = async (token) => {
  try {
    const request = await axios.get(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request.data.data;
  } catch (error) {
    return error.response.data;
  }
};
const createTask = async (body, token) => {
  try {
    const request = await axios.post(path, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};

const deleteTask = async (id, token) => {
  try {
    const response = await axios.delete(`${path}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("error de lectura de tareas", error);
  }
};

const updateTask = async (id, data, token) => {
  try {
    const response = await axios.put(`${path}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error de lectura de tareas", error);
  }
};

export default {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
