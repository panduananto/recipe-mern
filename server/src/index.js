import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import recipeRouter from './routes/recipe.js';

const CONNECTION_URL = 'mongodb+srv://pandu:pandu123@cluster0.itnql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3001;
const MONGOOSE_OPTION = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

mongoose
  .connect(CONNECTION_URL, MONGOOSE_OPTION)
  .then(() => app.listen(PORT, () => console.log(`Running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

app.use('/api/recipe', recipeRouter);
