import express, { Express, Request, Response } from 'express';
import dvdrental from './database/sequelize';

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});

dvdrental();