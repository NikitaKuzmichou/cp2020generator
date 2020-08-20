import { EthnicLocalization } from './ethnic';
import { AppLanguage } from '../../../../app.language';

export class EthnicLocalizationRu implements EthnicLocalization {

  getGenerate() {
    return 'Сгенерировать';
  }

  getHeader() {
    return 'Этническое происхождение';
  }

  getOrigin() {
    return 'Происхождение';
  }

  getOriginByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Африканское';
      case 2:
        return 'Англо-Американское';
      case 3:
        return 'Тёмнокожего Американца';
      case 4:
        return 'Китайское/Юго-восточная Азия';
      case 5:
        return 'Европейское';
      case 6:
        return 'Латиноамериканское';
      case 7:
        return 'Японское/Корейское';
      case 8:
        return 'Отстровитянин';
      case 9:
        return 'Центрально/Южно-Американское';
      case 10:
        return 'Центрально-Европейское/Советское';
      default:
        return 'Что-то пошло не так';
    }
  }

  getLanguages() {
    return 'Языки';
  }

  getLanguagesByRoll(roll: number) {
    switch (roll) {
      case 1:
        return ['Банту', 'Суахили', 'Конго', 'Фанте', 'Ашанти', 'Зулу'];
      case 2:
        return ['Английский'];
      case 3:
        return ['Английский', 'Жаргон тёмнокожих'];
      case 4:
        return ['Бирманский', 'Кантонский', 'Мандаринский', 'Тайский', 'Тибетский', 'Вьетнамский'];
      case 5:
        return ['Французский', 'Немецкий', 'Английский', 'Испанский', 'Итальянский',
          'Греческий', 'Датский', 'Норвежский', 'Шведский', 'Финский'];
      case 6:
        return ['Испанский', 'Английский'];
      case 7:
        return ['Японский', 'Корейский'];
      case 8:
        return ['Микронезийский', 'Тагальский', 'Полинезийский', 'Малайский',
          'Суданский', 'Индонезийский', 'Гавайский'];
      case 9:
        return ['Испанский', 'Португальский'];
      case 10:
        return ['Болгарский', 'Русский', 'Польский', 'Украинский', 'Словацкий'];
      default:
        return 'Что-то пошло не так';
    }
  }


  getLanguage() {
    return AppLanguage.RUSSIAN;
  }
}
