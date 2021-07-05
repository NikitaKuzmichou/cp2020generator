import {NamesGenerationOptions} from './names.generation.options';

export class NameOptions {
  nameType: NamesGenerationOptions;
  selected: boolean;

  constructor() {
    this.selected = false;
  }

  isEnabled() {
    return this.selected && this.nameType !== undefined;
  }
}
