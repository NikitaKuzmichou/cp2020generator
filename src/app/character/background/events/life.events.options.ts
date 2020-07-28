export class LifeEventsOptions {
  selected: boolean;
  nothingHappenedEvents: boolean;
  detailedGeneration: boolean;
  randomAge: boolean;
  age: number;

  constructor() {
    /**TODO*/
    this.selected = true;
    this.nothingHappenedEvents = false;
    this.randomAge = true;
    this.age = 16;
    this.detailedGeneration = true;
  }
}
