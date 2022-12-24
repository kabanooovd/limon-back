import { TABLES } from "../config"
import { IItem, IUser, TUserRole } from "../types";
import queries from "./queries"

const { users } = TABLES
class UsersRepo {
  async onGetUsersData() {
    try {
      const { rows, rowCount } = await queries.getTableData(users)
      return { quantity: rowCount, tableData: rows };
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onCreateUser(dto: IUser, newUserId: string, userRole: TUserRole) {
    const {email, userLogin} = dto;
    try {
      await queries.registrateUser(dto, users, newUserId, userRole)
      return {id: newUserId, userLogin, email, role: userRole}
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetUserByEmail(userEmail: string) {
    try {
      const foundUser = await queries.onGetEntityByParam("email", userEmail, users)
      return foundUser
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new UsersRepo()
