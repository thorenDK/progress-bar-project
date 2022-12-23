import express from 'express';
import { HR } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});

router.get('/signin', (req, res) => {
  res.render('Layout');
});

router.get('/signup', (req, res) => {
  res.render('Layout');
});

router.get('/allLists', (req, res) => {
  res.render('Layout');
});

router.get('/myLists', (req, res) => {
  res.render('Layout');
});

router.get('/users', async (req, res) => {
  const allUsers = await HR.findAll({
    order: [['createdAt', 'ASC']],
  });
  res.render('Layout', { allUsers });
});

export default router;
