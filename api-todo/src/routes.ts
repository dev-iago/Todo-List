import { Router } from 'express';
import { UsersController } from "./controllers/UsersController"

const routes = Router();

const usersController = new UsersController();

routes.post("/register", usersController.create)

routes.get("/users/:email", usersController.showUsers)


export { routes }