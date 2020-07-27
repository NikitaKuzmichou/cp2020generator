import { CharacterLocalization } from './character';
import { AppLanguage } from '../../app.language';

export class CharacterLocalizationRu implements CharacterLocalization {
  getGenerateBtn() {
    return 'Сгенерировать';
  }

  getOptionsHeader() {
    return 'Выберите опции для генерации';
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

  getDetailedGeneration() {
    return 'Подробная генерация ваших друзей или врагов';
  }

  getNothingHappened() {
    return 'Предотвратить события "Ничего не случилось в этом году"';
  }

  getHideOptions() {
    return 'Скрыть опции';
  }
}
