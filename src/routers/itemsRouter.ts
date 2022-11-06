import express, { Request, Response } from "express";
import ItemsController from "../controllers/itemsController";

const itemsRouter = express.Router();

itemsRouter.get(`/items`, ItemsController.onGetItems)
itemsRouter.get(`/items/:id`, ItemsController.onGetItemById)
itemsRouter.post(`/items`, ItemsController.onPostItem)

export default itemsRouter