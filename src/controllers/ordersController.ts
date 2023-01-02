import { Request, Response } from "express";
import OrdersService from "../services/ordersService";
import commonQueries from "../repo/queries/commonQueries";
import itemsService from "../services/itemsService";

class OrdersController {
  async onPostNewDeclaration(req: Request, res: Response) {
    const foundItem = await itemsService.onGetItemById(req.body.itemId)
    if (!foundItem) {
      return res.status(404).json(foundItem)
    }
    const dto = {
      ...req.body,
      rating: 3,
      item_name: "string",
      item_description: null,
      created_date: new Date().toISOString(),
      declaration_status: "created",
    }
    const response = await OrdersService.onPostOrder(dto)
    res.json(response)
    return
  }

  async onGetAllDeclarations(req: Request, res: Response) {
    const orders = await OrdersService.onGetOrders()
    res.json(orders)
    return
  }

  async onGetAllDeclarationById(req: Request, res: Response) {
    const { id } = req.params
    const response = await OrdersService.onGetOrderById(id)
    if (!response) {
      return res.status(404).json(response)
    }
    res.json(response)
    return
  }

  async onRemoveDeclarationById(req: Request, res: Response) {
    const { id } = req.params
    const response = await OrdersService.onRemoveOrderById(id)
    if (!response) {
      return res.status(404).json(response)
    }
    res.status(204).json()
    return
  }

  async onRemoveAllDeclarations(req: Request, res: Response) {
    await commonQueries.onRemoveAll('orders')
    res.status(204).json()
  }
}

export default new OrdersController()
