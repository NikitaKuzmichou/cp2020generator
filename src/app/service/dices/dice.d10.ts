import { Dice } from './dice';
import { RandomNumbers } from '../random/RandomNumbers';

export class DiceD10 implements Dice {
  getNumSides() {
    return '10';
  }

  roll() {
    return RandomNumbers.randomInt(1, 10);
  }
}
