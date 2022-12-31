import { TABLES } from "../../config";
import { pool } from "../../db_config";


class CommonQueries {

  async getTableData(tableName: string) {
    return await pool.query(`SELECT * FROM ${tableName}`);
  }

  async getDataById(id: string, tableName: string) {
    return await pool.query(`SELECT * FROM ${tableName} WHERE id = '${ id }'`)
  }

  async onGetEntityByParam(paramKey: string, paramValue: string, tableName: string) {
    return await pool.query(`SELECT * FROM ${tableName} WHERE ${paramKey} = '${paramValue}';`)
  }

  async onRemoveItemById(id: string, tableName: string) {
    return await pool.query(`DELETE FROM ${tableName} WHERE id = '${id}'`)
  }

  async onRemoveAll(tableName: string) {
    return await pool.query(`DELETE FROM ${tableName}`)
  }

}

export default new CommonQueries()