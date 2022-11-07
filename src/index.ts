import express from 'express';
import { ROOT_ROUTE } from './config';
import { pool } from './db_config';
import itemsRouter from './routers/itemsRouter';

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('static'));

app.use(`${ROOT_ROUTE}/`, itemsRouter);

const start = async () => {
  pool.on("connect", () => {});
  app.listen(PORT, () => {
    console.log(`app has startd on ${PORT} port`);
  });
};

start();