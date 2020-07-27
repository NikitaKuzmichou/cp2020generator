import { GenderOptions } from './gender.options';

export class NameOptions {
  gender: GenderOptions;
  selected: boolean;

  constructor() {
    this.selected = false;
  }
}
