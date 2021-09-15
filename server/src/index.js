import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import recipeRouter from './routes/recipe.js';
import authRouter from './routes/auth.js';

dotenv.config();

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3001;
const MONGOOSE_OPTION = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false };

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

mongoose
  .connect(CONNECTION_URL, MONGOOSE_OPTION)
  .then(() => app.listen(PORT, () => console.log(`Running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

app.use('/api/recipe', recipeRouter);
app.use('/api/auth', authRouter);
