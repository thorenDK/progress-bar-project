import express from 'express';
import morgan from 'morgan';
import session from 'express-session';

import path from 'path';
import { HR } from '../db/models';

import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import jsxRender from './utils/jsxRender';
import sessionConfig from './middlewares/myMiddleware';
import pathMiddleware from './middlewares/pathMiddleware';
import usersRouter from './routes/usersRouter';

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
app.use('/users', usersRouter);

app.delete('/delete', async (req, res) => {
  const { id } = req.body;
  // console.log('text--->', req.body);
  const deletedPost = await HR.findByPk(id);
  await deletedPost.destroy();
  res.json('OK');
});

app.post('/change', async (req, res) => {
  const thisUserIsAdmin = await HR.findByPk(req.body.id);
  if (thisUserIsAdmin.isAdmin) {
    await thisUserIsAdmin.update({ isAdmin: false });
    res.json(false);
  } else {
    await thisUserIsAdmin.update({ isAdmin: true });
    res.json(true);
  }
});

app.post('/save', async (req, res) => {
  const { id } = req.body.oneUser;
  const { value } = req.body;
  const thisUser = await HR.findByPk(id);
  thisUser.username = value; // изменяемый атрибут в таблице Users
  await thisUser.save();
  res.json('OK');
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
