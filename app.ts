import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dvdrental from './database/sequelize';
import films from './app/controllers/FilmsController'

const app: Express = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use('/films', films);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});

dvdrental();