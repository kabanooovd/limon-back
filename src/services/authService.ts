import UsersRepo from "../repo/usersRepo"
import jwt from "jsonwebtoken"
import * as config from "../config"
import bcrypt from "bcrypt";
import AuthRepo from "../repo/authRepo";
import { JwtPayload } from "../types";

const {
  JWT_ACCESS_SECRET_KEY, 
  JWT_REFRESH_SECRET_KEY, 
  JWT_ACCESS_TOKEN_LIFETIME, 
  JWT_REFRESH_TOKEN_LIFETIME,
} = config

class AuthService {
  async onGenerateTokens(payload: any) {
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
      const foundTokens = await AuthRepo.onGetTokensByParam("userId", foundUser.rows[0].id)
      if (!foundTokens) return null
      const { accesstoken, refreshtoken } = foundTokens
      return {accessToken: accesstoken, refreshToken: refreshtoken}
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onRefreshToken(refreshToken: string) {
    try {
      const data = this.onVerifyToken(refreshToken, "refresh") as JwtPayload
      const tokensPayload = {
        id: data.id,
        userLogin: data.userLogin,
        email: data.email,
        role: data.role,
      }
      const foundTokens = await AuthRepo.onGetTokensByParam("userId", data.id)
      const tokens = await this.onGenerateTokens(tokensPayload)
      if (foundTokens && tokens) {
        await AuthRepo.onRefreshToken(tokens, data.id)
        return tokens
      }
      return null
    } catch(error: any) {
      console.error(error.message)
    }
  }

  onVerifyToken(token: string, tokenKind: "access" | "refresh") {
    const TOKEN_SECRET_KEY = {
      "access": JWT_ACCESS_SECRET_KEY,
      "refresh": JWT_REFRESH_SECRET_KEY,
    }
    return jwt.verify(token, TOKEN_SECRET_KEY[tokenKind])
  }
}

export default new AuthService()