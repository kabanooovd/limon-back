import { pool } from "../db_config";

class Queries {
  async getTableData(tableName: string) {
    const sql_query = `SELECT * FROM ${tableName}`
    try {
      const { rows, rowCount } = await pool.query(sql_query);
      return { quantity: rowCount, tableData: rows };
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new Queries()