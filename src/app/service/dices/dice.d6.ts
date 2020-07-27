import { Dice } from './dice';
import { Random } from '../random/random';

export class DiceD6 implements Dice {
  getNumSides() {
    return '6';
  }

  roll() {
    return Random.getRandomInt(1, 6);
  }
}
