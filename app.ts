import express, { type Express } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

import indexRouter from './routes/index';

const app: Express = express();

const mongoDb: string | undefined = process.env.MONGODB_URI;

main().catch((err) => {
  console.log(err);
});
async function main(): Promise<void> {
  if (typeof mongoDb === 'string') {
    await mongoose.connect(mongoDb);
  }
}

interface corsInterface {
  origin: string[];
  optionsSuccessStatus: number;
}

const corsOptions: corsInterface = {
  origin: ['https://blog-bice-tau-13.vercel.app', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);

export default app;
