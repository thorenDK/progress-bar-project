import express from 'express';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

import { HR, Adaptation } from '../../db/models';

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

router.post('/list', async (req, res) => {
  const { name, email } = req.body;
  const checkEmail = await Adaptation.findOne({ where: { email } });
  if (!checkEmail && name && email) {
    const currAdaptation = await Adaptation.create({
      name,
      email,
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      hr_id: req.session?.user?.id,
    });
    const randomId = v4();
    const update = await Adaptation.update({ where: { id: currAdaptation.id } }, { url: `http://localhost:3000/list?id=${currAdaptation.id}&rid=${randomId}` });
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

export default router;
