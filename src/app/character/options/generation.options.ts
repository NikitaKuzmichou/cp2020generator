import { SkillsOptions } from './skills.options';
import { NameOptions } from './name.options';
import { CharacteristicsOptions } from './characteristics.options';
import { BackgroundOptions } from '../background/background.options';

export class GenerationOptions {
  nameOptions: NameOptions;
  characteristicOptions: CharacteristicsOptions;
  backgroundOptions: BackgroundOptions;
  skillsOptions: SkillsOptions;

  constructor() {
    this.nameOptions = new NameOptions();
    this.characteristicOptions = new CharacteristicsOptions();
    this.backgroundOptions = new BackgroundOptions();
    this.skillsOptions = new SkillsOptions();
  }

  hasActiveOption() {
    return this.nameOptions.selected || this.characteristicOptions.selected
           || this.backgroundOptions.hasActiveOption() || this.skillsOptions.selected;
  }
}
