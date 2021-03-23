export class LifeEventsOptions {
  selected: boolean;
  preventNothingHappenedEvents: boolean;
  detailedGeneration: boolean;
  randomAge: boolean;
  age: number;

  constructor() {
    /**TODO*/
    this.selected = true;
    this.preventNothingHappenedEvents = false;
    this.randomAge = true;
    this.age = 16;
    this.detailedGeneration = true;
  }
}
