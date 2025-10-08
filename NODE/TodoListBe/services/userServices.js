import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const getUser = async () => {
  const data = await prisma.user.findMany();
  return data;
};

const getUserId = async (idUser) => {
  const data = await prisma.user.findUnique({
    where: {
      id: idUser,
    },
  });

  console.log(data);
  return data;
};

const deleteUser = async (idUser) => {
  try {
    const data = await prisma.user.delete({
      where: {
        id: idUser,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

const updateUser = async (idUser, body) => {
  let { name, lastName, age, contry, email, password } = body;
  password = await hashPassword(password);
  const data = await prisma.user.update({
    where: {
      id: idUser,
    },
    data: {
      name: name,
      lastName: lastName,
      age: age,
      contry: contry,
      email: email,
      password: password,
    },
  });
  return data;
};

/*
se crea una tarea con los datos
{            
            "title": "tarea nueva",
            "description": "tarea nueva desde postman",                        
            "userId": "68e4791c3b17dff7393729fd"
}
*/
const createUser = async (body) => {
  let { name, lastName, age, contry, email, password } = body;
  password = await hashPassword(password);
  const data = await prisma.user.create({
    data: {
      name: name,
      lastName: lastName,
      age: age,
      contry: contry,
      email: email,
      password: password,
    },
  });

  return data;
};

const loginUser = async (body) => {
  let { email, password } = body;
  const data = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return data;
};

async function hashPassword(passwordBody) {
  const saltRounds = 10;
  return await bcrypt.hash(passwordBody, saltRounds);
}

export default {
  getUser,
  getUserId,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
};
