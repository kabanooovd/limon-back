import { TABLES } from "../../config";
import { pool } from "../../db_config";
import { IUser, TUserRole } from "../../types";


class AuthQueries {

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

}

export default new AuthQueries()