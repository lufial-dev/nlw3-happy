import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';
import "./database/conection";
import errorHandler from "./errors/handler";

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.listen(3333);

