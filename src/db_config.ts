import { Pool } from "pg";
import { dbConnectionConfig } from "./config";

export const pool = new Pool({ ...dbConnectionConfig });