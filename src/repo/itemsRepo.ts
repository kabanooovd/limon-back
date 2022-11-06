import { TABLES } from "../config"
import queries from "./queries"

class ItemsRepo {
  async onGetItemsData() {
    const { items } = TABLES
    try {
      return queries.getTableData(items)
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new ItemsRepo()
