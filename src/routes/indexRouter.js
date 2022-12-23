import express from 'express';
import { HR, Adaptation } from '../../db/models';

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
router.get('/list', (req, res) => {
  res.render('Layout');
});

router.get('/sample', async (req, res) => {
  const { id } = req.query;
  const list = await Adaptation.findByPk(id);
  res.render('Layout', { list });
  console.log(list);
});

export default router;
