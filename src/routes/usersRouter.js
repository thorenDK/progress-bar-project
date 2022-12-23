import express from 'express';
import { HR } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allUsers = await HR.findAll({
    order: [['createdAt', 'ASC']],
  });
  res.json(allUsers);
});

export default router;
