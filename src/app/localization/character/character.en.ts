import { CharacterLocalization } from './character';
import { AppLanguage } from '../../app.language';

export class CharacterLocalizationEn implements CharacterLocalization {
  getAge() {
    return 'Age';
  }

  getOptionsHeader() {
    return 'Choose options for generation';
  }

  getBackground() {
    return 'Character background';
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

  getDetailedGeneration() {
    return 'Detailed generation of your friends or enemies';
  }

  getNothingHappened() {
    return 'Prevent "Nothing happened that year" events';
  }
}
