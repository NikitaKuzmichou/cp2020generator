import { Dice } from './dice';
import { Random } from '../random/random';

export class DiceD4 implements Dice {
  getNumSides() {
    return '4';
  }

  roll() {
   return Random.getRandomInt(1, 4);
  }
}
