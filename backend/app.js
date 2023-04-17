import express from 'express';
import userRouter from './routes/user.js';
import { config } from 'dotenv';

export const app = express();

config({
    path: './data/config.env',
})

// const router = express.Router()
app.use(express.json());
app.use("/users", userRouter);



