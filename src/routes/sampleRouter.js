import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});

router.post('/', async (req, res) => {});

export default router;
