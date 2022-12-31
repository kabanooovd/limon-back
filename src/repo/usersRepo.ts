import { TABLES } from "../config"
import { IUser, TUserRole } from "../types";
import commonQueries from "./queries/commonQueries"
import authQueries from "./queries/authQueries"

const { users } = TABLES
class UsersRepo {
  async onGetUsersData() {
    try {
      const { rows, rowCount } = await commonQueries.getTableData(users)
      return { quantity: rowCount, tableData: rows };
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onCreateUser(dto: IUser, newUserId: string, userRole: TUserRole) {
    const {email, userLogin} = dto;
    try {
      await authQueries.registrateUser(dto, users, newUserId, userRole)
      return {id: newUserId, userLogin, email, role: userRole}
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetUserByEmail(userEmail: string) {
    try {
      const foundUser = await commonQueries.onGetEntityByParam("email", userEmail, users)
      return foundUser
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new UsersRepo()
