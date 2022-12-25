import { TABLES } from "../config"
import * as uuid from 'uuid';
import queries from "./queries"

const { tokens } = TABLES
class AuthRepo {
  async onSetTokens(tokens: { accessToken: string, refreshToken: string }, newUserId: string) {
    try {
      const tokensId = uuid.v4()
      return await queries.onSetTokens(tokens, newUserId, tokensId)
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetTokensByParam(paramKey: string, paramValue: string) {
    try {
      const response =  await queries.onGetEntityByParam(paramKey, paramValue, tokens)
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
      return await queries.onRefreshTokens(tokens, userId) 
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new AuthRepo()