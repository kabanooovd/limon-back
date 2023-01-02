import { pool } from "../../db_config";
import { IOrders } from "../../types";

class OrdersQueries {

    async onAddOrders(dto: IOrders) {
    const {id, userId, itemId, Fio, rating, item_name, item_description, contact, region, city, street, postolIndex, house, flat, quantity, declaration_status, created_date, isAgreeWithConditions} = dto
    return await pool.query(`INSERT INTO orders (id, userId, itemId, Fio, rating, item_name, item_description, contact, region, city, street, postolIndex, house, flat, quantity, declaration_status, created_date, isAgreeWithConditions)
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
      '${declaration_status}',
      '${created_date}',
      '${isAgreeWithConditions}'      
      );`
    );
  }
}

export default new OrdersQueries()