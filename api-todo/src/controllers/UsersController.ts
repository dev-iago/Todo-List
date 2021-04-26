import {Request, Response} from "express"
import { UsersService } from "../services/UsersService";

class UsersController{
  async create(req: Request, res: Response){

    const { email } = req.body

    const usersService = new UsersService();

    try{
      const users = await usersService.create(email);
      return res.json(users);

    }catch(err){
      return res.status(400).json({message: err.message})
    }
  }

  async showUsers(req: Request, res: Response){

    const { email } = req.params

    const usersService = new UsersService();

    try{
      const usersList = await usersService.listUsers(email);
      return res.json(usersList);

    }catch(err){
      return res.status(400).json({message: err.message})
    }
  }
}

export { UsersController }