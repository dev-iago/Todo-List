import express from 'express';

import "./database";
import { routes } from './routes';

const app = express();

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(routes)

app.listen(3333, () => console.log("Server is running on port 3333"))