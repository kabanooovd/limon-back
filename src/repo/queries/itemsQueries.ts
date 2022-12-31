import { TABLES } from "../../config";
import { pool } from "../../db_config";
import { IItem } from "../../types";

const { items } = TABLES

class ItemsQueries {

  async addItem(dto: IItem, newItemId: string) {
    const { item_name, price, category, rating, item_image, item_description } = dto
    return await pool.query(`INSERT INTO ${items} (id, item_name, price, category, rating, item_image, item_description) 
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

}

export default new ItemsQueries()