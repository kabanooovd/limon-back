import UsersRepo from "../repo/usersRepo"

class UsersService {
  async onGetUsers() {
    try {
      return await UsersRepo.onGetUsersData()
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new UsersService()