import express from "express";
import { ROUTES } from "../config";
import AuthController from "../controllers/authController";

const authRouter = express.Router();

const { AUTHORIZATION, CREATE_USER, LOGIN, LOGOUT, REFRESH } = ROUTES

authRouter.post(`/${AUTHORIZATION}/${CREATE_USER}`, AuthController.onCreateUser)
authRouter.post(`/${AUTHORIZATION}/${LOGIN}`, AuthController.onLoginUser)
authRouter.post(`/${AUTHORIZATION}/${LOGOUT}`, AuthController.onLogoutUser)
authRouter.get(`/${AUTHORIZATION}/${REFRESH}`, AuthController.onRefreshToken)




export default authRouter
