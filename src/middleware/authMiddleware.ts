import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_ACCESS_SECRET_KEY } from "../config"
import { JwtPayload } from "../types";


export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send("Not authorized");
    return;
  }
  if (authorization.split(" ")[0] !== "Bearer") {
    res.status(401).send("Incorrect authorization");
    return;
  }

  const token = req.headers.authorization?.split(" ")[1]
  try {
    if (authorization && token) {
      jwt.verify(token, JWT_ACCESS_SECRET_KEY) as JwtPayload;
      next();
    } else {
      res.status(401).send("Incorrect authorization");
      return;
    }
  } catch(err) {
    res.status(403).send("No access...");
    return;
  }
};