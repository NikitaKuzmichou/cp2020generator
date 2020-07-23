import { CharacterLocalization } from './character';
import { AppLanguage } from '../../app.language';

/**TODO*/
export class CharacterLocalizationEn implements CharacterLocalization{
  getAge() {
    return 'Age';
  }

  getBackground() {
    return '';
  }

  getCharacteristics() {
    return 'Stats';
  }

  getEthnic() {
    return 'Ethnic origins';
  }

  getFamily() {
    return 'Family background';
  }

  getShowOptions() {
    return 'Show generation options';
  }

  getHeader() {
    return 'Generating past for the player\'s character';
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }

  getLifeEvents() {
    return 'Life events';
  }

  getMotivation() {
    return 'Motivations';
  }

  getName() {
    return 'Name';
  }

  getRandomAge() {
    return 'Random age';
  }

  getSkills() {
    return 'Skills';
  }

  getPersonalStyle() {
    return 'Dress and personal style';
  }

  getGenerateBtn() {
    return 'Generate';
  }
}
