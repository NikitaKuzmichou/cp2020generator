import { LifeEvent } from '../life.event';
import { LifeEventType } from '../life.event.type';

export class NothingGenerate {

  constructor() {
  }

  generateRomantic(age: number): LifeEvent {
    return new LifeEvent(age, LifeEventType.nothing);
  }
}
