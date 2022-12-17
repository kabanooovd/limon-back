import { Request, Response } from "express"
import ItemsService from "../services/itemsService"

class ItemsController {
  async onGetItems(req: Request, res: Response) {
    const items = await ItemsService.onGetItems()
    res.json(items)
    return
  }

  async onPostItem(req: Request, res: Response) {

    // const filename: string | null = req.file?.filename ? Date.now() + req.file.filename : null;
    const filename: string | null = req.file ? req.file.filename : null;

    console.log("==> ", filename)

    const dto: any = req.body
    const response = await ItemsService.onAddItem({...dto, item_image: filename})
    res.status(201).json(response)
    return
  }

  async onGetItemById(req: Request, res: Response) {
    const { id } = req.params
    const response = await ItemsService.onGetItemById(id)
    if (!response) {
      return res.status(404).json(response)
    }
    res.json(response)
    return
  }

  async onRemoveItemById(req: Request, res: Response) {
    const { id } = req.params
    const response = await ItemsService.onRemoveItemById(id)
    if (!response) {
      return res.status(404).json(response)
    }
    res.status(204).json()
    return
  }

  async onRemoveAllItems(req: Request, res: Response) {
    await ItemsService.onRemoveAll()
    res.status(204).json()
    return
  }

}

export default new ItemsController()