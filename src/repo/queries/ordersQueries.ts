import { TABLES } from "../../config";
import { pool } from "../../db_config";
import { IItem, IOrders } from "../../types";

const { orders } = TABLES

class OrdersQueries {

    async onAddOrders(dto: IOrders) {
    const {id, userId, itemId, Fio, rating, item_name, item_description, contact, region, city, street, postolIndex, house, flat, quantity, isAgreeWithConditions} = dto
    return await pool.query(`INSERT INTO orders (id, userId, itemId, Fio, rating, item_name, item_description, contact, region, city, street, postolIndex, house, flat, quantity, isAgreeWithConditions)
    VALUES (
      '${id}', 
      '${userId}', 
      '${itemId}', 
      '${Fio}', 
      ${rating},
      '${item_name}', 
      '${item_description}', 
      '${contact}', 
      '${region}', 
      '${city}', 
      '${street}', 
      '${postolIndex}', 
      '${house}', 
      '${flat}', 
      '${quantity}', 
      '${isAgreeWithConditions}'      
      );`
    );
  }
}

export default new OrdersQueries()