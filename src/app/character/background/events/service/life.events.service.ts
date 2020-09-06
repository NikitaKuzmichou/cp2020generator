import { LifeEventsOptions } from '../life.events.options';
import { LifeEvent } from './life.event';

import { Dice } from '../../../../service/dices/dice';
import { DiceD6 } from '../../../../service/dices/dice.d6';
import { DiceD10 } from '../../../../service/dices/dice.d10';
import { DiceRoll } from '../../../../service/dices/dice.roll';
import { ProblemsWinsGenerate } from './generation/problems.wins.generate';
import { FriendsEnemiesGenerate } from './generation/friends.enemies.generate';
import { RomanticGenerate } from './generation/romantic.generate';
import { NothingGenerate } from './generation/nothing.generate';

export class LifeEventsService {
  private d6: Dice;
  private d10: Dice;
  private problemsWins: ProblemsWinsGenerate;
  private friendsEnemies: FriendsEnemiesGenerate;
  private romantic: RomanticGenerate;
  private nothing: NothingGenerate;

  constructor() {
    this.d6 = new DiceD6();
    this.d10 = new DiceD10();
    this.problemsWins = new ProblemsWinsGenerate();
    this.friendsEnemies = new FriendsEnemiesGenerate();
    this.romantic = new RomanticGenerate();
    this.nothing = new NothingGenerate();
  }

  generateEvents(options: LifeEventsOptions): Array<LifeEvent> {
    if (options.randomAge) {
      options.age = this.generateAge();
    }
    let roll;
    let eventDate = 17;
    let events = new Array<LifeEvent>();
    while (eventDate <= options.age) {
      roll = this.d10.roll();
      switch (roll) {
        case 1:
        case 2:
          events.push(this.problemsWins.generateProblemsWinsEvent(eventDate));
          ++eventDate;
          break;
        case 3:
        case 4:
        case 5:
        case 6:
          events.push(this.friendsEnemies.generateFriendsEnemies(eventDate));
          ++eventDate;
          break;
        case 7:
        case 8:
          events.push(this.romantic.generateRomantic(eventDate));
          ++eventDate;
          break;
        case 9:
        case 10:
          if (options.nothingHappenedEvents) {
            events.push(this.nothing.generateRomantic(eventDate));
            ++eventDate;
          }
          break;
      }
    }
    return events;
  }

  private generateAge() {
    return 16 + DiceRoll.multipleRoll(this.d6, 2);
  }
}
