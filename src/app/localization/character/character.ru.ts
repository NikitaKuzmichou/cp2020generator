import { CharacterLocalization } from './character';
import { AppLanguage } from '../../app.language';

export class CharacterLocalizationRu implements CharacterLocalization {
  getGenerateBtn() {
    return 'Сгенерировать';
  }

  getAge() {
    return 'Возраст';
  }

  getBackground() {
    return 'Предыстория персонажа';
  }

  getCharacteristics() {
    return 'Характеристики';
  }

  getEthnic() {
    return 'Этническое происхождение';
  }

  getFamily() {
    return 'Предыстория семьи';
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
    return 'Жизненные события';
  }

  getMotivation() {
    return 'Мотивация';
  }

  getName() {
    return 'Имя';
  }

  getRandomAge() {
    return 'Случайный возраст';
  }

  getSkills() {
    return 'Умения';
  }

  getPersonalStyle() {
    return 'Одежда и личный стиль';
  }

  getHideOptions() {
    return 'Скрыть опции';
  }
}
