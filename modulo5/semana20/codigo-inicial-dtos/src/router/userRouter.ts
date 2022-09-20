import { Router } from "express";
import { UserController } from "../controller/UserController";

// chamando o userRouter para rotear os endereços de endpoint
export const userRouter = Router();

const userController = new UserController()

// http://localhost:3003/users/signup
userRouter.post("/signup", userController.signup)

// http://localhost:3003/users/login
userRouter.post("/login", userController.login)

// http://localhost:3003/users/
userRouter.get("/", userController.getUsers)

// http://localhost:3003/users/:id
userRouter.delete("/:id", userController.deleteUser)

// http://localhost:3003/users/:id
userRouter.put("/:id", userController.editUser)