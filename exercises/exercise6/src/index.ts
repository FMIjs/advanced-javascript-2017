import * as express from 'express';
import * as bodyParser from 'body-parser';

import { viewRouter } from './view-router';
import { apiRouter } from './api-router';

const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.set('view engine', 'ejs');
// app.use(viewRouter);
app.use('/api', apiRouter);

app.listen(port, () => console.log(`Server is listening on ${port}`));
