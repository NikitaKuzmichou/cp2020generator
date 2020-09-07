import { DiceRoll } from '../../../service/dices/dice.roll';
import { DiceD6 } from '../../../service/dices/dice.d6';
import { Dice } from '../../../service/dices/dice';

export class CharacteristicsService {
  private d6: Dice;

  constructor() {
    this.d6 = new DiceD6();
  }

  public generateCharacteristic() {
    let skill;
    do {
      skill = DiceRoll.multipleRoll(this.d6, 2);
    } while (skill > 10);
    return skill;
  }

  public getCarry(body: number) {
    return body * 10;
  }

  public getLift(body: number) {
    return body * 40;
  }

  public getRun(ma: number) {
    return ma * 3;
  }

  public getLeap(run: number) {
    return run / 4;
  }

  public getHumanity(emp: number) {
    return emp * 10;
  }

  public getBtm(body: number) {
    switch (body) {
      case 2:
        return -0;
      case 3:
      case 4:
        return -1;
      case 5:
      case 6:
      case 7:
        return -2;
      case 8:
      case 9:
        return -3;
      case 10:
        return -4;
      default:
        return -5;
    }
  }
}
