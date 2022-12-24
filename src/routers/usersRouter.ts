import express from "express";
import { ROUTES } from "../config";
import UsersController from "../controllers/usersController";

const usersRouter = express.Router();

const { UESRS } = ROUTES

usersRouter.get(`/${UESRS}`, UsersController.onGetUsers)

export default usersRouter
