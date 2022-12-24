import { TABLES } from "../config"
import { IItem } from "../types";
import * as uuid from 'uuid';
import queries from "./queries"

const { users } = TABLES
class UsersRepo {
  async onGetUsersData() {
    try {
      const { rows, rowCount } = await queries.getTableData(users)
      return { quantity: rowCount, tableData: rows };
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new UsersRepo()
