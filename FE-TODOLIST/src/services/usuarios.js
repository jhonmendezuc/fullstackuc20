import axios from "axios";

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;
let path = "/";
const getUser = () => {};
const getUserId = () => {};
const createUser = () => {};
const updateUser = () => {};

const login = async (email, password) => {
  const body = {
    email: email,
    password: password,
  };
  path = `${URL_BACKEND}users/login`;

  try {
    const request = await axios.post(path, body);
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};

export default {
  getUser,
  getUserId,
  createUser,
  updateUser,
  login,
};
