import express, { Request, Response } from "express";
import ItemsController from "../controllers/itemsController";
import multer from "multer"
import { storage } from "../utils/onMulterStorage";

const upload = multer({ storage: storage })

const itemsRouter = express.Router();

itemsRouter.get(`/items`, ItemsController.onGetItems)
itemsRouter.get(`/items/:id`, ItemsController.onGetItemById)
itemsRouter.post(`/items`, upload.single('item_image'), ItemsController.onPostItem)

export default itemsRouter

// multer docs => https://www.npmjs.com/package/multer