import express from 'express';
import { Adaptation } from '../../db/models';

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

router.get('/list', (req, res) => {
  res.render('Layout');
});

router.get('/sample/:id', async (req, res) => {
  const { id } = req.params;
  const list = await Adaptation.findByPk(id);
  res.render('Layout', { list });
});

export default router;
