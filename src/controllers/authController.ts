import { Request, Response } from "express";

class AuthController {
  async onCreateUser(req: Request, res: Response) {
    // const items = await ItemsService.onGetItems()
    res.json({date: "test registration"})
    return
  }

  async onLoginUser(req: Request, res: Response) {
    // const items = await ItemsService.onGetItems()
    res.json({date: "test login"})
    return
  }

  async onLogoutUser(req: Request, res: Response) {
    // const items = await ItemsService.onGetItems()
    res.json({date: "test logout"})
    return
  }
}

export default new AuthController()
