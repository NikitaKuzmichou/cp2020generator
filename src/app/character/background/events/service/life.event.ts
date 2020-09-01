import { LifeEventType } from './life.event.type';

export class LifeEvent {
  age: number;
  rolls: Array<number>;
  type: LifeEventType;

  constructor(age?: number, type?: LifeEventType) {
    this.age = age;
    this.type = type;
    this.rolls = new Array<number>();
  }

  addRoll(roll: number) {
    this.rolls.push(roll);
  }

  getRoll(ind: number) {
    return this.rolls[ind];
  }

  lastRoll() {
    return this.rolls[this.rolls.length - 1];
  }

  setType(type: LifeEventType) {
    this.type = type;
  }
}
