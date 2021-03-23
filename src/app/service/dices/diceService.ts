import { Dice } from './dice';

export class DiceService {
  static multipleRoll(dice: Dice, num: number) {
    if (num < 1) {
      return null;
    }
    let result = 0;
    for (let i = 0; i < num; ++i) {
      result += dice.roll();
    }
    return result;
  }
}
