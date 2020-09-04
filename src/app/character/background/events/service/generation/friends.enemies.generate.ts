import { DiceD10 } from '../../../../../service/dices/dice.d10';
import { LifeEvent } from '../life.event';
import { LifeEventType } from '../life.event.type';

export class FriendsEnemiesGenerate {
  private d10: DiceD10;

  constructor() {
    this.d10 = new DiceD10();
  }

  generateFriendsEnemies(age: number): LifeEvent {
    let lifeEvent = new LifeEvent(age, LifeEventType.friendsEnemies);
    lifeEvent.addRoll(this.d10.roll());
    //roll for gender
    lifeEvent.addRoll(this.d10.roll());
    if (lifeEvent.getRoll(0) < 6) {
      //friend roll
      lifeEvent.addRoll(this.d10.roll());
    } else {
      //enemy roll
      lifeEvent.addRoll(this.d10.roll());
      //cause roll
      lifeEvent.addRoll(this.d10.roll());
      //who's fracked off roll
      lifeEvent.addRoll(this.d10.roll());
      //whatcha gonna do roll
      lifeEvent.addRoll(this.d10.roll());
      //what can throw against roll
      lifeEvent.addRoll(this.d10.roll());
    }
    return lifeEvent;
  }
}
