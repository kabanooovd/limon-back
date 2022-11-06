import express, { Request, Response } from 'express';
import { pool } from './db_config';

const app = express();
const PORT = 5000;
app.get('/', async (req: Request, res: Response) => {
  res.send('Test for start server...');
});

const start = async () => {
  pool.on("connect", () => {});
  app.listen(PORT, () => {
    console.log(`app has startd on ${PORT} port`);
  });
};

start();