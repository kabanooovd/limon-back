import { Request, Response } from "express";
import { LOGIN_DTO_ERROR_RULES } from "../config";
import AuthService from "../services/authService";
import UsersService from "../services/usersService";
import { IUser } from "../types";
import { onValidateLoginDto } from "../utils/validators/onValidateLoginDto";

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
    const errors = onValidateLoginDto(LOGIN_DTO_ERROR_RULES, dto)
    // DTO data handling by rules from config
    if (errors.length > 0) {
      return res.status(400).json(errors)
    }
    const response = await AuthService.onLoginUser(dto)
    if (!response) {
      res.status(404).json({data: `email or password are incorrect...`})
      return
    }
    res.json(response)
    return
  }

  async onLogoutUser(req: Request, res: Response) {
    res.json({data: "test logout"})
    return
  }

  async onRefreshToken(req: Request, res: Response) {
    const refreshToken = req.headers.authorization?.split(" ")[1]
    if (refreshToken) {
      const response = await AuthService.onRefreshToken(refreshToken)
      if (!response) {
        res.status(401).json({data: "Authorisation is failed"})
        return
      }
      res.json({data: response})
      return
    }
    res.status(403).json({data: "Authorisation is requied"})
    return
  }
}

export default new AuthController()
