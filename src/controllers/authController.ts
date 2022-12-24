import { Request, Response } from "express";
import AuthService from "../services/authService";
import UsersService from "../services/usersService";
import { IUser } from "../types";

class AuthController {
  async onCreateUser(req: Request, res: Response) {
    const dto: IUser = req.body;
    const response = await UsersService.onCreateUser(dto)
    if (!response) {
      res.status(400).json({data: `user ${dto.email} already exists... Please, use another one...`})
      return
    }
    res.json(response)
    return
  }

  async onLoginUser(req: Request, res: Response) {
    const dto: {email: string, userPassword: string} = req.body;
    const response = await AuthService.onLoginUser(dto)
    if (!response) {
      res.status(404).json({data: `email or password are incorrect...`})
      return
    }
    res.json(response)
    return
  }

  async onLogoutUser(req: Request, res: Response) {
    // const items = await ItemsService.onGetItems()
    res.json({data: "test logout"})
    return
  }
}

export default new AuthController()
