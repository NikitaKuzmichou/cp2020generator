import { DiceD10 } from '../../../../../service/dices/dice.d10';
import { LifeEvent } from '../life.event';
import { LifeEventType } from '../life.event.type';

export class RomanticGenerate {
  private d10: DiceD10;

  constructor() {
    this.d10 = new DiceD10();
  }

  generateRomantic(age: number): LifeEvent {
    const lifeEvent = new LifeEvent(age, LifeEventType.romantic);
    lifeEvent.addRoll(this.d10.roll());
    if (lifeEvent.lastRoll() === 5) {
      // roll tragic love affair
      lifeEvent.addRoll(this.d10.roll());
      // roll mutual feelings
      lifeEvent.addRoll(this.d10.roll());
    } else if (lifeEvent.lastRoll() === 6 || lifeEvent.lastRoll() === 7) {
      // roll love affair with problems
      lifeEvent.addRoll(this.d10.roll());
    }
    return lifeEvent;
  }
}
