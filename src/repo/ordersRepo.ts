import { TABLES } from "../config"
import * as uuid from 'uuid';
import queries from "./queries"
import { IOrders } from "../types";

const { orders } = TABLES
class OrdersRepo {
  async onCreateDeclaration(dto: IOrders) {
    try {
      return await queries.onAddOrders(dto)
    } catch(error: any) {
      console.error(error.message)
    }
  }  


  async onGetOrders() {
    try {
      const { rows, rowCount } = await queries.getTableData(orders)
      return { quantity: rowCount, tableData: rows };
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new OrdersRepo()