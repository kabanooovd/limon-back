// import { JwtPayload } from "jsonwebtoken";

export interface IItem {
  item_name: string;
  price: number;
  category: string;
  rating: number;
  item_image: string | null;
  item_description: string;
}

export interface IUser {
  email: string;
  userLogin: string;
  userPassword: string;
}

export interface JwtPayload {
  id: string;
  userLogin: string;
  email: string;
  role: string;
}

export type TUserRole = "USER" | "MANAGER" | "ADMIN";