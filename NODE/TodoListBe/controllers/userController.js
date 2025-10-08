import userService from "../services/userServices.js";

const getUser = async (req, res) => {
  const data = await userService.getUser();

  if (data.length === 0) {
    res.status(404).send({
      message: "No hay usuarios",
    });
  }

  res.status(200).send({
    message: "Usuarios encontradas",
    data: data,
  });
};

const getUserId = async (req, res) => {
  const idUser = req.params.id;
  const data = await userService.getUserId(idUser);
  res.status(200).send({
    message: "Usuario encontrada",
    data: data,
  });
};

const createUser = async (req, res) => {
  const body = req.body;
  const data = await userService.createUser(body);
  res.status(201).send({
    message: "Usuario creada",
    data: data,
  });
};

const deleteUser = async (req, res) => {
  const idUser = req.params.id;
  const data = await userService.deleteUser(idUser);

  if (data === null) {
    res.status(404).send({
      message: "Usuario no encontrada",
    });
  }

  if (data.code == "P2014") {
    res.status(423).send({
      message:
        "no se puede eliminar el usuario porque tiene elementos asociados",
    });
  }
  res.status(410).send({
    message: "Usuario eliminada",
    data: data,
  });
};

const updateUser = async (req, res) => {
  const body = req.body;
  const idUser = req.params.id;
  const data = await userService.updateUser(idUser, body);
  res.status(201).send({
    message: "Usuario actualizada",
    data: data,
  });
};

const loginUser = async (req, res) => {
  const body = req.body;
  const data = await userService.loginUser(body);
  if (data === null) {
    return res.status(404).send({
      message: "Usuario no encontrado",
    });
  }
  return res.status(200).send({
    message: "Usuario encontrado",
    data: data, //aqui se envia el token
  });
};

export default {
  getUser,
  getUserId,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
};
