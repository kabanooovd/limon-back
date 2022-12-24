import express from "express";
import { ROUTES } from "../config";
import AuthController from "../controllers/authController";

const authRouter = express.Router();

const { AUTHORIZATION, CREATE_USER, LOGIN, LOGOUT } = ROUTES

authRouter.post(`/${AUTHORIZATION}/${CREATE_USER}`, AuthController.onCreateUser)
authRouter.post(`/${AUTHORIZATION}/${LOGIN}`, AuthController.onLoginUser)
authRouter.post(`/${AUTHORIZATION}/${LOGOUT}`, AuthController.onLogoutUser)



export default authRouter
