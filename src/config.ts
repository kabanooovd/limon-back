export const dbConnectionConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'limon',
  password: 'root',
  port: Number(5432),
}

export const JWT_ACCESS_SECRET_KEY = "limon_access_secret_key";
export const JWT_ACCESS_TOKEN_LIFETIME = "1m";
export const JWT_REFRESH_SECRET_KEY = "limon_refresh_secret_key";
export const JWT_REFRESH_TOKEN_LIFETIME = "30d";

export const BASE_HOST = "http://localhost:5000";

export const ROOT_ROUTE = `/api`;

export const SWAGGER_ROOT_ROUTE = `/api-docs`;

export const FILE_STORAGE_DIR_NAME = "static";

export const TABLES = {
  items: 'items',
  users: 'users',
  tokens: 'tokens',
}

export const ROUTES = {
  ITEMS: "items",
  AUTHORIZATION: "auth",
  CREATE_USER: "registration",
  LOGIN: "login",
  LOGOUT: "logout",
  UESRS: "users",
  REFRESH: "refresh",
}

export const ITEMS_DTO_ERROR_RULES = [
  {field: "item_name", isRequied: true, maLenght: 20},
  {field: "price", isRequied: true},
  {field: "category", isRequied: true},
  {field: "rating", isRequied: true},
  {field: "item_description", isRequied: true, maLenght: 100},
]

export const LOGIN_DTO_ERROR_RULES = [
  {field: "email", isRequied: true, maLenght: 50},
  {field: "userPassword", isRequied: true, maLenght: 20},
]