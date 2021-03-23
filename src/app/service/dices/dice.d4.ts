import { Dice } from './dice';
import { RandomNumbers } from '../random/RandomNumbers';

export class DiceD4 implements Dice {
  getNumSides() {
    return '4';
  }

  roll() {
   return RandomNumbers.randomInt(1, 4);
  }
}
