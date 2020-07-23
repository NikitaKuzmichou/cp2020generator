import { CharacterLocalization } from './character';
import { AppLanguage } from '../../app.language';

/**TODO*/
export class CharacterLocalizationRu implements CharacterLocalization {
  getGenerateBtn() {
    return 'Сгенерировать';
  }

  getAge() {
    return 'Возраст';
  }

  getBackground() {
    return '';
  }

  getCharacteristics() {
    return 'Характеристики';
  }

  getEthnic() {
    return '';
  }

  getFamily() {
    return '';
  }

  getShowOptions() {
    return 'Показать опции для генерации';
  }

  getHeader() {
    return 'Генерация предыстории для персонажа игрока';
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }

  getLifeEvents() {
    return '';
  }

  getMotivation() {
    return '';
  }

  getName() {
    return '';
  }

  getRandomAge() {
    return '';
  }

  getSkills() {
    return '';
  }

  getPersonalStyle() {
    return '';
  }
}
