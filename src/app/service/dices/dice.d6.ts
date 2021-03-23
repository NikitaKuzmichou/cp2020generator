import { Dice } from './dice';
import { RandomNumbers } from '../random/RandomNumbers';

export class DiceD6 implements Dice {
  getNumSides() {
    return '6';
  }

  roll() {
    return RandomNumbers.randomInt(1, 6);
  }
}
