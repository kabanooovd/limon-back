import { TABLES } from "../config"
import * as uuid from 'uuid';
import authQueries from "./queries/authQueries"
import commonQueries from "./queries/commonQueries";

const { tokens } = TABLES
class AuthRepo {
  async onSetTokens(tokens: { accessToken: string, refreshToken: string }, newUserId: string) {
    try {
      const tokensId = uuid.v4()
      return await authQueries.onSetTokens(tokens, newUserId, tokensId)
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetTokensByParam(paramKey: string, paramValue: string) {
    try {
      const response =  await commonQueries.onGetEntityByParam(paramKey, paramValue, tokens)
      if (response.rows.length) {
        return response.rows[0]
      }
      return null
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onRefreshToken(tokens: { accessToken: string, refreshToken: string }, userId: string) {
    try {
      return await authQueries.onRefreshTokens(tokens, userId) 
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new AuthRepo()