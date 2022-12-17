import express, { Request, Response } from "express";
import ItemsController from "../controllers/itemsController";
import multer from "multer"
import { storage } from "../utils/onMulterStorage";
import { TABLES } from "../config";

const upload = multer({ storage: storage })

const itemsRouter = express.Router();

const { items } = TABLES

itemsRouter.get(`/${items}`, ItemsController.onGetItems)
itemsRouter.get(`/${items}/:id`, ItemsController.onGetItemById)
itemsRouter.post(`/${items}`, upload.single('item_image'), ItemsController.onPostItem)
itemsRouter.delete(`/${items}/:id`, ItemsController.onRemoveItemById)
itemsRouter.delete(`/${items}/all`, ItemsController.onRemoveAllItems)

export default itemsRouter

// multer docs => https://www.npmjs.com/package/multer