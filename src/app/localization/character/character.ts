import { Localization } from '../localization';

export interface CharacterLocalization extends Localization {
  getHeader();
  getOptionsHeader();
  getName();
  getCharacteristics();
  getBackground();
  getPersonalStyle();
  getEthnic();
  getMotivation();
  getFamily();
  getLifeEvents();
  getRandomAge();
  getAge();
  getSkills();
  getDetailedGeneration();
  getNothingHappened();
}
