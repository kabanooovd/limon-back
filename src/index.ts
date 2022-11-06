import express, { Request, Response } from 'express';

const app = express();
const PORT = 5000;
app.get('/', (req: Request, res: Response) => {
  res.send('Test for start server...');
});
app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});