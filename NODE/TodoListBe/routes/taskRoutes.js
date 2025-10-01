import { Router } from "express";
import taskController from "../controllers/taskController.js";
const router = new Router();

router
  .get("/tareas", taskController.getTask)
  .get("/tareas/:id", taskController.getTaskId)
  .post("/tareas", taskController.createTask);

export default router;
