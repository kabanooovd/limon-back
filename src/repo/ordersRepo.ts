import { TABLES } from "../config"
import commonQueries from "./queries/commonQueries";
import ordersQueries from "./queries/ordersQueries";
import { IOrders } from "../types";

const { orders } = TABLES
class OrdersRepo {
  async onCreateDeclaration(dto: IOrders) {
    try {
      const data = await ordersQueries.onAddOrders(dto)
      if (data) return dto
      return null
    } catch(error: any) {
      console.error(error.message)
    }
  }  

  async onGetOrders() {
    try {
      const { rows, rowCount } = await commonQueries.getTableData(orders)
      return { quantity: rowCount, tableData: rows };
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetOrderById(id: string) {
    const { rows } = await commonQueries.getDataById(id, orders)
    return rows[0]
  }

  async onRemoveOrderById(id: string) {
    return await commonQueries.onRemoveDataById(id, orders)
  }
}

export default new OrdersRepo()