import express, { Application } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDb from './src/config/database.ts';
import webRoutes from './src/routes/web.ts';

dotenv.config();

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');

connectDb()
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

app.use('/', webRoutes);

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
