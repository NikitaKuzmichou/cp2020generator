import { FamilyRolls } from './family.rolls';
import { SiblingRolls } from './sibling.rolls';
import { Dice } from '../../../service/dices/dice';
import { DiceD10 } from '../../../service/dices/dice.d10';

export class FamilyService {
  private rolls: FamilyRolls;
  private dice: Dice;

   constructor() {
    this.rolls = new FamilyRolls();
    this.dice = new DiceD10();
  }

  generateRolls(): FamilyRolls {
    this.rolls.ranking = this.dice.roll();
    this.rolls.parents = this.dice.roll();
    if (this.rolls.parents > 6) {
      this.rolls.somethingHapped = this.dice.roll();
    }
    this.rolls.status = this.dice.roll();
    if (this.rolls.status > 6) {
      this.rolls.tragedy = this.dice.roll();
    }
    this.rolls.childEnv = this.dice.roll();
    this.rolls.siblings = this.generateSiblings(this.dice.roll());
    return this.rolls;
  }

  private generateSiblings(numSiblings: number): Array<SiblingRolls> {
    let siblings = new Array<SiblingRolls> ();
    if (numSiblings < 8) {
      while (numSiblings-- > 0) {
        let sibling = new SiblingRolls();
        sibling.age = this.dice.roll();
        sibling.feelings = this.dice.roll();
        sibling.gender = this.dice.roll();
        siblings.push(sibling);
      }
    }
    return siblings;
  }
}
