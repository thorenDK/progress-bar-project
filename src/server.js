import express from 'express';
import morgan from 'morgan';
import session from 'express-session';

import path from 'path';

import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import sampleRouter from './routes/sampleRouter';
import jsxRender from './utils/jsxRender';
import sessionConfig from './middlewares/myMiddleware';
import pathMiddleware from './middlewares/pathMiddleware';
import listRouter from './routes/listRouter';
import myListRouter from './routes/MyListRouter';

require('dotenv').config();

const PORT = process.env.PORT || 3002;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session(sessionConfig));
app.use(pathMiddleware);

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/allLists', listRouter);
app.use('/myLists', myListRouter);
app.use('/sample', sampleRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
