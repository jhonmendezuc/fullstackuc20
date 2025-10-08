import { Router } from "express";
import taskController from "../controllers/taskController.js";
import verifyToken from "../midlewares/verifyToken.js";
const router = new Router();

router.use(verifyToken);

router
  .get("/tareas", taskController.getTask)
  .get("/tareas/:id", taskController.getTaskId)
  .post("/tareas", taskController.createTask)
  .delete("/tareas/:id", taskController.deleteTask)
  .put("/tareas/:id", taskController.updateTask);

export default router;
