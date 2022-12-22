/* eslint-disable max-len */
import express from 'express';
import { Adaptation } from '../../db/models';

const router = express.Router();

router.patch('/', async (req, res) => {
  try {
    const {
      one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
    } = req.body;

    console.log(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, '----------------------------------------------------------');

    let check1 = false;
    let check2 = false;
    let check3 = false;
    let check4 = false;
    let check5 = false;
    let check6 = false;
    let check7 = false;
    let check8 = false;
    let check9 = false;
    let check10 = false;
    let check11 = false;
    let check12 = false;

    if (one) check1 = true;
    if (two) check2 = true;
    if (three) check3 = true;
    if (four) check4 = true;
    if (five) check5 = true;
    if (six) check6 = true;
    if (seven) check7 = true;
    if (eight) check8 = true;
    if (nine) check9 = true;
    if (ten) check10 = true;
    if (eleven) check11 = true;
    if (twelve) check12 = true;

    let onE = 0;
    let twO = 0;
    let threE = 0;
    let fouR = 0;
    let fivE = 0;
    let siX = 0;
    let seveN = 0;
    let eighT = 0;
    let ninE = 0;
    let teN = 0;
    let eleveN = 0;
    let twelvE = 0;

    if (one) onE = 8.3;
    if (two) twO = 8.3;
    if (three) threE = 8.3;
    if (four) fouR = 8.3;
    if (five) fivE = 8.3;
    if (six) siX = 8.3;
    if (seven) seveN = 8.3;
    if (eight) eighT = 8.3;
    if (nine) ninE = 8.3;
    if (ten) teN = 8.3;
    if (eleven) eleveN = 8.3;
    if (twelve) twelvE = 8.3;
    const sum = onE + twO + threE + fouR + fivE + siX + seveN + eighT + ninE + teN + eleveN + twelvE;
    const progress = Math.ceil(sum);
    const id = 4; // Нужно написать контролируемый инпут в компоненте SampleForm через useState
    await Adaptation.update({
      progress, one: check1, two: check2, three: check3, four: check4, five: check5, six: check6, seven: check7, eight: check8, nine: check9, ten: check10, eleven: check11, twelve: check12,
    }, { where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

export default router;
