import { Dice } from './dice';
import { RandomNumbers } from '../random/RandomNumbers';

export class DiceD100 implements Dice {
  getNumSides() {
    return '100';
  }

  roll() {
    return RandomNumbers.randomInt(1, 100);
  }
}
