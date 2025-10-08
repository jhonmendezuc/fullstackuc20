import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTask = async () => {
  const data = await prisma.task.findMany();
  return data;
};

const getTaskId = async (idTask) => {
  const data = await prisma.task.findUnique({
    where: {
      id: idTask,
    },
  });

  return data;
};

const deleteTask = async (idTask) => {
  const data = await prisma.task.delete({
    where: {
      id: idTask,
    },
  });
  return data;
};

const updateTask = async (idTask, body) => {
  const data = await prisma.task.update({
    where: {
      id: idTask,
    },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
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
const createTask = async (body) => {
  const { title, description, userId } = body;
  const data = await prisma.task.create({
    data: {
      title: title,
      description: description,
      userId: userId,
      dueDate: new Date(),
    },
  });

  return data;
};

export default {
  getTask,
  getTaskId,
  createTask,
  deleteTask,
  updateTask,
};
