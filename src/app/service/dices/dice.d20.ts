import { Dice } from './dice';
import { RandomNumbers } from '../random/RandomNumbers';

export class DiceD20 implements Dice {
  getNumSides() {
    return '20';
  }

  roll() {
    return RandomNumbers.randomInt(1, 20);
  }
}
