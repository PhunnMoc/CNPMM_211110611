import express from 'express';
import bodyParser from 'body-parser';
import connectDb from './src/config/database.js';
import webRoutes from './src/routes/web.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');


connectDb();
app.use('/', webRoutes);

app.listen(8080, () => console.log('Server running on http://localhost:8080'));
