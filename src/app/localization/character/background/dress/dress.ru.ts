import { DressLocalization } from './dress';
import { AppLanguage } from '../../../../app.language';

export class DressLocalizationRu implements DressLocalization {
  getLanguage() {
    return AppLanguage.ENGLISH;
  }

  getHeader() {
    return 'Одежда и индивидуальный стиль';
  }

  getGenerate() {
    return 'Сгенерировать';
  }

  getClothes() {
    return 'Одежда';
  }

  getClothesByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Байкерская кожанка';
      case 2:
        return 'Синие джинсы';
      case 3:
        return 'Корпоративный костюм';
      case 4:
        return 'Комбинезон';
      case 5:
        return 'Мини-юбка';
      case 6:
        return 'Высокая мода';
      case 7:
        /**TODO*/
        return 'Cammos';
      case 8:
        return 'Обычная одежда';
      case 9:
        return 'Одежда отсутсвует';
      case 10:
        return 'Bag lady chic';
      default:
        return 'Что-то пошло не так';
    }
  }

  getHairstyle() {
    return 'Причёска';
  }

  getHairstyleByRoll(roll: number) {
    switch (roll) {
      case 1:
        /**TODO*/
        return 'Mohawk';
      case 2:
        return 'Длинная и крысиная';
      case 3:
        return 'Короткая с шипами';
      case 4:
        return 'Беспорядочная, дикая';
      case 5:
        return 'Плешивая';
      case 6:
        return 'В полоску';
      case 7:
        return 'Крашеные волосы';
      case 8:
        return 'Аккуратная, короткая';
      case 9:
        return 'Короткая, кудрявая';
      case 10:
        return 'Длинная, прямая';
      default:
        return 'Что-то пошло не так';
    }
  }

  getAffectations() {
    return 'Особенности';
  }

  getAffectationsByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Татуировки';
      case 2:
        return 'Зеркальные очки';
      case 3:
        return 'Ритуальные шрамы';
      case 4:
        return 'Перчатки с шипами';
      case 5:
        return 'Кольца в носу';
      case 6:
        return 'Серьги';
      case 7:
        return 'Длинные ногти';
      case 8:
        return 'Каблуки';
      case 9:
        return 'Странные контактные линзы';
      case 10:
        return 'Перчатки без пальцев';
      default:
        return 'Что-то пошло не так';
    }
  }
}
