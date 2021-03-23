import { Dice } from './dice';
import { RandomNumbers } from '../random/RandomNumbers';

export class DiceD12 implements Dice {
  getNumSides() {
    return '12';
  }

  roll() {
    return RandomNumbers.randomInt(1, 12);
  }
}
