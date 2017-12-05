import * as express from 'express';
import * as bodyParser from 'body-parser';

import { viewRouter } from './view-router';
import { apiRouter } from './api-router';

const app = express();
app.use(express.static('static'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(viewRouter);
app.use('/api', apiRouter);

app.listen(8000, () => console.log('Server is listening on 8000'));