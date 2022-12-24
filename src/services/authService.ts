import UsersRepo from "../repo/usersRepo"
import jwt from "jsonwebtoken"
import * as config from "../config"
import bcrypt from "bcrypt";
import AuthRepo from "../repo/authRepo";

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

  async onLoginUser(dto: {email: string, userPassword: string}) {
    try {
      const foundUser = await UsersRepo.onGetUserByEmail(dto.email)
      if (!foundUser?.rows.length) return null
      const foundUserPw = foundUser.rows[0].userpassword 
      const isPasswordEquals = await bcrypt.compare(dto.userPassword, foundUserPw)
      if (!isPasswordEquals) return null
      const tokens = await AuthRepo.onGetTokensByParam("userId", foundUser.rows[0].id)
      const foundTokens = tokens.rows[0] 
      const { accesstoken, refreshtoken } = foundTokens
      return {accessToken: accesstoken, refreshToken: refreshtoken}
    } catch(error: any) {
      console.error(error.message)
    }
    
  }
}

export default new AuthService()