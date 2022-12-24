import UsersRepo from "../repo/usersRepo"
import jwt from "jsonwebtoken"
import * as config from "../config"

class AuthService {
  async onGenerateTokens(payload: any) {
    const {
      JWT_ACCESS_SECRET_KEY, 
      JWT_REFRESH_SECRET_KEY, 
      JWT_ACCESS_TOKEN_LIFETIME, 
      JWT_REFRESH_TOKEN_LIFETIME,
    } = config
    try {
      const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET_KEY, {expiresIn: JWT_ACCESS_TOKEN_LIFETIME})
      const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {expiresIn: JWT_REFRESH_TOKEN_LIFETIME})
      return { accessToken, refreshToken }
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new AuthService()