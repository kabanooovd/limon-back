import express from "express";
import { ROUTES } from "../config";
import OrdersController from "../controllers/ordersController";

const ordersRouter = express.Router();

const { ORDERS } = ROUTES

ordersRouter.post(`/${ORDERS}`, OrdersController.onPostNewCeclaration)
ordersRouter.get(`/${ORDERS}`, OrdersController.onGetAllDeclarations)




export default ordersRouter
