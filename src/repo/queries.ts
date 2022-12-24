import { TABLES } from "../config";
import { pool } from "../db_config";
import { IItem } from "../types";

const { items } = TABLES

class Queries {

  async getTableData(tableName: string) {
    return await pool.query(`SELECT * FROM ${tableName}`);
  }

  async addItem(dto: IItem, tableName: string, newItemId: string) {
    const { item_name, price, category, rating, item_image, item_description } = dto
    return await pool.query(`INSERT INTO ${tableName} (id, item_name, price, category, rating, item_image, item_description) 
      VALUES (
        '${newItemId}', 
        '${item_name}', 
        ${price}, 
        '${category}', 
        ${rating}, 
        '${item_image}', 
        '${item_description}'
        );`);
  }

  async getItemById(id: string) {
    return await pool.query(`SELECT * FROM ${items} WHERE id = '${ id }'`)
  }

  async onRemoveItemById(id: string) {
    return await pool.query(`DELETE FROM ${items} WHERE id = '${id}'`)
  }

  async onRemoveAll() {
    return await pool.query(`DELETE FROM ${items}`)
  }

}

export default new Queries()