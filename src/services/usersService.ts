import UsersRepo from "../repo/usersRepo"
import { IUser } from "../types"
import bcrypt from "bcrypt"
import AuthService from "./authService"
import AuthRepo from "../repo/authRepo"
import * as uuid from 'uuid';

class UsersService {
  async onGetUsers() {
    try {
      return await UsersRepo.onGetUsersData()
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onCreateUser(dto: IUser) {
    try {
      const foundUser = await UsersRepo.onGetUserByEmail(dto.email)
      if (!foundUser) {
        return null
      }
      const newUserId = uuid.v4()
      const newUserRole = 'USER'
      const hashPassword = await bcrypt.hash(dto.userPassword, 3);
      dto.userPassword = hashPassword
      const createdUserData = await UsersRepo.onCreateUser(dto, newUserId, newUserRole) 
      const tokens = await AuthService.onGenerateTokens(createdUserData)
      tokens && await AuthRepo.onSetTokens(tokens, newUserId)
      return createdUserData
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetUserByEmail(userEmail: string) { // SELECT * FROM USERS WHERE email = 'test@mail.ru';
    try {
      return await UsersRepo.onGetUserByEmail(userEmail)
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new UsersService()