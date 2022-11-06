import { TABLES } from "../config"
import { IItem } from "../types";
import * as uuid from 'uuid';
import queries from "./queries"

const { items } = TABLES
class ItemsRepo {
  async onGetItemsData() {
    try {
      const { rows, rowCount } = await queries.getTableData(items)
      return { quantity: rowCount, tableData: rows };
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onAddItem(dto: IItem) {
    const newItemId = uuid.v4()
    try {
      await queries.addItem(dto, items, newItemId)
      return { id: newItemId, ...dto }
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetItemById(id: string) {
    try {
      const {rows} = await queries.getItemById(id)
      return rows[0]
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new ItemsRepo()
