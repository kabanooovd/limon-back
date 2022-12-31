import { Request, Response } from "express";
import OrdersService from "../services/ordersService";
import commonQueries from "../repo/queries/commonQueries";

class OrdersController {
  async onPostNewCeclaration(req: Request, res: Response) {
    const dto = req.body;
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
