import { Request, Response } from "express";
import OrdersService from "../services/ordersService";

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
}

export default new OrdersController()
