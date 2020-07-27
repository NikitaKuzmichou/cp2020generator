import { Dice } from './dice';
import { Random } from '../random/random';

export class DiceD100 implements Dice {
  getNumSides() {
    return '100';
  }

  roll() {
    return Random.getRandomInt(1, 100);
  }
}
