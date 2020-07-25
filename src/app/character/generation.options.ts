import { SkillsOptions } from './skills/skills.options';
import { NameOptions } from './name/name.options';
import { CharacteristicsOptions } from './characteristics/characteristics.options';
import { BackgroundOptions } from './background/background.options';

export class GenerationOptions {
  nameOptions: NameOptions;
  characteristicOptions: CharacteristicsOptions;
  backgroundOptions: BackgroundOptions;
  skillsOptions: SkillsOptions;
}
