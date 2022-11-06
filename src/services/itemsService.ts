import ItemsRepo from "../repo/itemsRepo"
import { IItem } from "../types"

class ItemsService {
  async onGetItems() {
    try {
      return await ItemsRepo.onGetItemsData()
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onAddItem(dto: IItem) {
    try {
      return await ItemsRepo.onAddItem(dto) 
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onGetItemById(id: string) {
    try {
      return await ItemsRepo.onGetItemById(id) 
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new ItemsService()