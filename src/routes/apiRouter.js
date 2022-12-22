import express from 'express';
import bcrypt from 'bcrypt';
import { HR } from '../../db/models';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {
    name, email, password: pass, check,
  } = req.body;
  let isAdmin;
  if (check) {
    isAdmin = true;
  } else {
    isAdmin = false;
  }
  const checkEmail = await HR.findOne({ where: { email } });
  if (!checkEmail && name && email && pass) {
    const password = await bcrypt.hash(pass, 7);
    const currHR = await HR.create({
      name, email, password, isAdmin,
    });
    req.session.user = {
      id: currHR.id,
      name: currHR.name,
      email: currHR.email,
      isAdmin: currHR.isAdmin,
    };
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const currHR = await HR.findOne({ where: { email } });
  if (currHR && email && password) {
    const compare = await bcrypt.compare(password, currHR.password);
    if (compare) {
      req.session.user = {
        id: currHR.id,
        name: currHR.name,
        email: currHR.email,
        isAdmin: currHR.isAdmin,
      };
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/signin');
});

export default router;
