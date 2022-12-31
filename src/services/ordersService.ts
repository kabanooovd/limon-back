import { IOrders, JwtPayload } from "../types";
import ordersRepo from "../repo/ordersRepo";
import * as uuid from "uuid";

class OrdersService {
  async onPostOrder(dto: Omit<IOrders, "id">) {
    const id = uuid.v4();
    try {
      return await ordersRepo.onCreateDeclaration({id, ...dto})
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetOrders() {
    try {
      return await ordersRepo.onGetOrders()
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetOrderById(id: string) {
    try {
      return await ordersRepo.onGetOrderById(id)
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new OrdersService()