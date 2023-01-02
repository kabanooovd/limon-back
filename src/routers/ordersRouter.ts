import express from "express";
import { ROUTES } from "../config";
import OrdersController from "../controllers/ordersController";

const ordersRouter = express.Router();

const { ORDERS } = ROUTES

ordersRouter.post(`/${ORDERS}`, OrdersController.onPostNewDeclaration)
ordersRouter.get(`/${ORDERS}`, OrdersController.onGetAllDeclarations)
ordersRouter.get(`/${ORDERS}/:id`, OrdersController.onGetAllDeclarationById)
ordersRouter.delete(`/${ORDERS}/all`, OrdersController.onRemoveAllDeclarations)
ordersRouter.delete(`/${ORDERS}/:id`, OrdersController.onRemoveDeclarationById)





export default ordersRouter
