import { DiceD10 } from '../../../../../service/dices/dice.d10';
import { LifeEvent } from '../life.event';
import { LifeEventType } from '../life.event.type';

export class ProblemsWinsGenerate {
  private d10: DiceD10;

  constructor() {
    this.d10 = new DiceD10();
  }

  generateProblemsWinsEvent(age: number): LifeEvent {
    let lifeEvent = new LifeEvent(age, LifeEventType.problemsWins);
    lifeEvent.addRoll(this.d10.roll());
    if (lifeEvent.lastRoll() % 2 === 0) {
      //generate luck event
      lifeEvent.addRoll(this.d10.roll());
    } else {
      //generate disaster strikes
      lifeEvent.addRoll(this.d10.roll());
      //generate what are you gonna do about it
      lifeEvent.addRoll(this.d10.roll());
    }
    return lifeEvent;
  }
}
