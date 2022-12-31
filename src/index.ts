import express from 'express';
import * as config from './config';
import { pool } from './db_config';
import itemsRouter from './routers/itemsRouter';
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import authRouter from './routers/authRouter';
import usersRouter from './routers/usersRouter';
import ordersRouter from './routers/ordersRouter';

const { BASE_HOST, FILE_STORAGE_DIR_NAME, ROOT_ROUTE, SWAGGER_ROOT_ROUTE } = config

const PORT = 5000;

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Lomon Web-store API",
      description: "Designed by Kabanov Dmitry",
      contact: {
        name: "Amazing Developer"
      },
      servers: [BASE_HOST]
    }
  },
  // ['.routes/*.js']
  apis: ["./src/routers/itemsRouter.ts"]
};

app.use(SWAGGER_ROOT_ROUTE, swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions)));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(FILE_STORAGE_DIR_NAME));

app.use(`${ROOT_ROUTE}/`, itemsRouter);
app.use(`${ROOT_ROUTE}/`, authRouter);
app.use(`${ROOT_ROUTE}/`, usersRouter);
app.use(`${ROOT_ROUTE}/`, ordersRouter);

const start = async () => {
  pool.on("connect", () => {});
  app.listen(PORT, () => {
    console.log(`app has startd on ${PORT} port`);
  });
};

start();