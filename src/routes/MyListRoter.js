import express from 'express';
import { Adaptation } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    name,
    email,
    url,
    progress,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
  } = req.body;
  const created = await Adaptation.create({
    name,
    email,
    url,
    progress,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    user_id: req.session.user.id,
  });
  if (!created) {
    return res.sendStatus(400);
  }
  return res.json(created);
});

router.get('/my', async (req, res) => {
  const lists = await Adaptation.findAll();
  res.json(lists);
});

export default router;
