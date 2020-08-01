import { Dice } from '../../../service/dices/dice';
import { DiceD6 } from '../../../service/dices/dice.d6';
import { Ethnic } from './ethnic';

export class EthnicService {
  private d6: Dice;

  constructor() {
    this.d6 = new DiceD6();
  }

  getEthnic(): Ethnic {
    const ethnic = new Ethnic();
    ethnic.roll = this.d6.roll();
    //ethnic.origin = this.getOrigin(ethnic.roll);
    //ethnic.languages = this.getLanguages(ethnic.roll);
    return ethnic;
  }

  private getOrigin(roll: number) {
    /**todo*/

  }

  private getLanguages(roll: number) {
    /**todo*/
  }
}
