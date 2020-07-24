import { Localization } from '../localization';

export interface CharacterLocalization extends Localization {
  getHeader();
  getShowOptions();
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
  getGenerateBtn();
  getHideOptions();
}
