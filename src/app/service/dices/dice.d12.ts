import { Dice } from './dice';
import { Random } from '../random/random';

export class DiceD12 implements Dice {
  getNumSides() {
    return '12';
  }

  roll() {
    return Random.getRandomInt(1, 12);
  }
}
