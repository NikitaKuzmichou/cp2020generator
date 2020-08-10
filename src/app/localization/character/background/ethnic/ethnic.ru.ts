import { EthnicLocalization } from './ethnic';
import { AppLanguage } from '../../../../app.language';

export class EthnicLocalizationRu implements EthnicLocalization {
  getAfrican() {
    return ['Африканское',
             ['Банту', 'Суахили', 'Конго', 'Фанте', 'Ашанти', 'Зулу']];
  }

  getAngloAmerican() {
    return ['Англо-Американское', ['Английский']];
  }

  getBlackAmerican() {
    return ['Тёмнокожего Американца',
      ['Английский', 'Жаргон тёмнокожих']];
  }

  getChinese() {
    return ['Китайское/Юго-восточная Азия',
      ['Бирманский', 'Кантонский', 'Мандаринский', 'Тайский', 'Тибетский', 'Вьетнамский']];
  }

  getEuropean() {
    return ['Европейское',
      ['Французский', 'Немецкий', 'Английский', 'Испанский', 'Итальянский',
        'Греческий', 'Датский', 'Норвежский', 'Шведский', 'Финский']];
  }

  getHispanicAmerican() {
    return ['Латиноамериканское',
      ['Испанский', 'Английский']];
  }

  getKorean() {
    return ['Японское/Корейское',
      ['Японский', 'Корейский']];
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }

  getPacificIslander() {
    return ['Отстровитянин',
      ['Микронезийский', 'Тагальский', 'Полинезийский', 'Малайский',
        'Суданский', 'Индонезийский', 'Гавайский']];
  }

  getSouthAmerican() {
    return ['Центрально/Южно-Американское',
      ['Испанский', 'Португальский']];
  }

  getSoviet() {
    return ['Центрально-Европейское/Советское',
      ['Болгарский', 'Русский', 'Польский', 'Украинский', 'Словацкий']];
  }

  getGenerate() {
    return 'Сгенерировать';
  }

  getHeader() {
    return 'Этническое происхождение';
  }

  getOrigin() {
    return 'Происхождение';
  }

  getLanguages() {
    return 'Языки';
  }
}
