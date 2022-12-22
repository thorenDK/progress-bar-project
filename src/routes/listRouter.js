import express from 'express';
import { Adaptation } from '../../db/models';

const router = express.Router();

router.get('/all', async (req, res) => {
  const lists = await Adaptation.findAll();
  res.json(lists);
});

export default router;
