import express from 'express';
import { Adaptation } from '../../db/models';

const router = express.Router();

router.get('/lists', async (req, res) => {
  const hr = req.session.user.id;
  const progress = await Adaptation.findAll({
    where: { hr_id: hr },
  });
  res.json(progress);
});

export default router;
