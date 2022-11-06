import ItemsRepo from "../repo/itemsRepo"

class ItemsService {
  async onGetItems() {
    try {
      return await ItemsRepo.onGetItemsData()
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new ItemsService()