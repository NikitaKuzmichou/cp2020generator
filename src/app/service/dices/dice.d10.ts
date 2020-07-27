import { Dice } from './dice';
import { Random } from '../random/random';

export class DiceD10 implements Dice {
  getNumSides() {
    return '10';
  }

  roll() {
    return Random.getRandomInt(1, 10);
  }
}
