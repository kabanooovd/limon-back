export const dbConnectionConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'limon',
  password: 'root',
  port: Number(5432),
}

export const JWT_ACCESS_SECRET_KEY = "limon_access_secret_key";
export const JWT_REFRESH_SECRET_KEY = "limon_refresh_secret_key";

export const BASE_HOST = "http://localhost:5000";

export const ROOT_ROUTE = `/api`;

export const SWAGGER_ROOT_ROUTE = `/api-docs`;

export const FILE_STORAGE_DIR_NAME = "static";

export const TABLES = {
  items: 'items',
  users: 'users',
}

export const ROUTES = {
  ITEMS: "items",
  AUTHORIZATION: "auth",
  CREATE_USER: "registration",
  LOGIN: "login",
  LOGOUT: "logout",
  UESRS: "users",
}