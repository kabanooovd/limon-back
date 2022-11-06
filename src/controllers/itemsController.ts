import { Request, Response } from "express"
import ItemsService from "../services/itemsService"

class ItemsController {
  async onGetItems(req: Request, res: Response) {
    try {
      const items = await ItemsService.onGetItems()
      res.json(items)
      return
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new ItemsController()