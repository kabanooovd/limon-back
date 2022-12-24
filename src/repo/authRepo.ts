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
}

export default new AuthRepo()