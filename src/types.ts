// import { JwtPayload } from "jsonwebtoken";

export interface IOrders {
  id: string;
  userId: string | null;
  itemId: string;
  Fio: string;
  rating: number;
  item_name: string;
  item_description: string | null;
  contact: string | null;
  region: string;
  city: string;
  street: string;
  postolIndex: string | null;
  house: string;
  flat : string | null;
  quantity: number;
  declaration_status: string;
  created_date: string;
  isAgreeWithConditions: boolean;
}
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