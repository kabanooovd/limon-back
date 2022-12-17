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
      const response =  await ItemsRepo.onGetItemById(id) 
      if (!response) {
        return null
      }
      return response
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onRemoveItemById(id: string) {
    try {
      const foundItem = await this.onGetItemById(id)
      if (!foundItem) {
        return null
      } 
      return await ItemsRepo.onRemoveItemById(id) 
    } catch(error: any) {
      console.error(error.message)
    }
  }

  async onRemoveAll() {
    try {
      return await ItemsRepo.onRemoveAll()
    } catch(error: any) {
      console.error(error.message)
    }
  }
}

export default new ItemsService()