import { Router } from "express";
import userController from "../controllers/userController.js";
import verifyToken from "../midlewares/verifyToken.js";
const router = new Router();

router
  .get("/users", verifyToken, userController.getUser)
  .post("/users/login", userController.loginUser)
  .get("/users/:id", verifyToken, userController.getUserId)
  .post("/users", verifyToken, userController.createUser)
  .delete("/users/:id", verifyToken, userController.deleteUser)
  .put("/users/:id", verifyToken, userController.updateUser);

export default router;
