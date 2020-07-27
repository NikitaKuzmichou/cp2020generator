import { LifeEventsOptions } from './events/life.events.options';

export class BackgroundOptions {
  dress: boolean;
  ethnic: boolean;
  motivation: boolean;
  family: boolean;
  events: LifeEventsOptions;

  constructor() {
    this.events = new LifeEventsOptions();
  }

  hasActiveOption() {
    return this.dress || this.ethnic || this.motivation || this.family
           || this.events.selected;
  }
}
