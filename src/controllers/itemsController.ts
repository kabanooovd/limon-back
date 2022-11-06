import { Request, Response } from "express"
import ItemsService from "../services/itemsService"
import { IItem } from "../types"

class ItemsController {
  async onGetItems(req: Request, res: Response) {
    const items = await ItemsService.onGetItems()
    res.json(items)
    return
  }

  async onPostItem(req: Request, res: Response) {
    const dto: any = req.body
    const response = await ItemsService.onAddItem(dto)
    res.status(201).json(response)
    return
  }

  async onGetItemById(req: Request, res: Response) {
    const { id } = req.params
    const response = await ItemsService.onGetItemById(id)
    res.json(response)
    return
  }
}

export default new ItemsController()