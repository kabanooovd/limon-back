import express, { Request, Response } from "express";
import ItemsController from "../controllers/itemsController";
import multer from "multer"

const upload = multer({ dest: 'uploads/' })

const itemsRouter = express.Router();

itemsRouter.get(`/items`, ItemsController.onGetItems)
itemsRouter.get(`/items/:id`, ItemsController.onGetItemById)
itemsRouter.post(`/items`, upload.none(), ItemsController.onPostItem)

export default itemsRouter

// multer docs => https://www.npmjs.com/package/multer