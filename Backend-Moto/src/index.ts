import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { routeUsuarios } from './routers/usuarios.router';
import { Database } from './utils/database';
import cors from 'cors';

dotenv.config();
const db: Database = new Database();//instancia

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());//para poblar el objeto body
app.use(express.urlencoded({extended:true}));//para poblar el objeto body

app.use('/usuarios', routeUsuarios);
//Get
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server......');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});