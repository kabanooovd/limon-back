import { TABLES } from "../config"
import { IItem } from "../types";
import * as uuid from 'uuid';
import commonQueries from "./queries/commonQueries";
import itemsQueries from "./queries/itemsQueries";

const { items } = TABLES
class ItemsRepo {
  async onGetItemsData() {
    try {
      const { rows, rowCount } = await commonQueries.getTableData(items)
      return { quantity: rowCount, tableData: rows };
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onAddItem(dto: IItem) {
    const newItemId = uuid.v4()
    try {
      await itemsQueries.addItem(dto, newItemId)
      return { id: newItemId, ...dto }
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetItemById(id: string) {
    try {
      const { rows } = await commonQueries.getDataById(id, items)
      return rows[0]
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onRemoveItemById(id: string) {
    try {
      return await commonQueries.onRemoveDataById(id, items)
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onRemoveAll() {
    try {
      return await commonQueries.onRemoveAll(items)
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new ItemsRepo()
