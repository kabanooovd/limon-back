import { Request, Response } from "express";
import UsersService from "../services/usersService";

class UsersController {
  async onGetUsers(req: Request, res: Response) {
    const users = await UsersService.onGetUsers()
    res.json({data: users})
    return
  }
}

export default new UsersController()