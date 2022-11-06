import express, { Request, Response } from "express";
import itemsController from "../controllers/itemsController";

const itemsRouter = express.Router();

itemsRouter.get(`/items`, itemsController.onGetItems)

export default itemsRouter