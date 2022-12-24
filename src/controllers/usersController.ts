import { Request, Response } from "express";

class UsersController {
  async onGetUsers(req: Request, res: Response) {
    res.json({data: []})
    return
  }
}

export default new UsersController()