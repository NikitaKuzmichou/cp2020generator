import { LifeEvent } from '../life.event';
import { LifeEventType } from '../life.event.type';

export class NothingGenerate {

  constructor() {
  }

  generateNothing(age: number): LifeEvent {
    return new LifeEvent(age, LifeEventType.nothing);
  }
}
