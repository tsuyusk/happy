import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from './configs/upload';

import './database/connection';
import errorHandler from './errors/handler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadConfig.tmpFolder));
app.use(routes);
app.use(errorHandler);

export default app;
