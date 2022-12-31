import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_ACCESS_SECRET_KEY } from "../config"


export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send("Not authorized");
    return;
  }
  if (authorization.split(" ")[0] === "Basic") {
    res.status(401).send("Incorrect authorization");
    return;
  }

  const token = req.headers.authorization?.split(" ")[1]
  console.log("==> ", token)
  try {
    if (authorization && token) {
      var decoded = jwt.verify(token, JWT_ACCESS_SECRET_KEY);
      decoded && next();
    } else {
      res.status(401).send("Incorrect authorization");
      return;
    }
  } catch(err) {
    res.status(403).send("No access...");
    return;
  }
};