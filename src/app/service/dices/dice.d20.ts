import { Dice } from './dice';
import { Random } from '../random/random';

export class DiceD20 implements Dice {
  getNumSides() {
    return '20';
  }

  roll() {
    return Random.getRandomInt(1, 20);
  }
}
