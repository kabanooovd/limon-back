import { TABLES } from "../config";
import { pool } from "../db_config";
import { IItem, IOrders, IUser, TUserRole } from "../types";

const { items } = TABLES

class Queries {

  async getTableData(tableName: string) {
    return await pool.query(`SELECT * FROM ${tableName}`);
  }

  async onGetEntityByParam(paramKey: string, paramValue: string, tableName: string) {
    return await pool.query(`SELECT * FROM ${tableName} WHERE ${paramKey} = '${paramValue}';`)
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









  async registrateUser(dto: IUser, tableName: string, newUserId: string, userRole: TUserRole) {
    const {email, userLogin, userPassword} = dto;
    return await pool.query(`INSERT INTO ${tableName} (id, email, userLogin, userPassword, userRole)
      VALUES (
        '${newUserId}',
        '${email}',
        '${userLogin}',
        '${userPassword}',
        '${userRole}'
      );
    `)
  }


  async onSetTokens(tokens: { accessToken: string, refreshToken: string }, userId: string, id: string) {
    const { accessToken, refreshToken } = tokens;
    return await pool.query(`insert into tokens (id, userId, accessToken, refreshToken) 
      values (
        '${id}', 
        '${userId}', 
        '${accessToken}', 
        '${refreshToken}'
      );`
    )
  }

  async onRefreshTokens(tokens: { accessToken: string, refreshToken: string }, userId: string) {
    const { accessToken, refreshToken } = tokens;
    return await pool.query(`UPDATE tokens SET refreshToken = '${refreshToken}', accessToken = '${accessToken}' WHERE userId = '${userId}'`)
  }





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
      );`);
    
  }





}

export default new Queries()