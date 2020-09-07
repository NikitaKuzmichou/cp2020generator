import { CharacteristicsLocalization } from './characteristics';
import { AppLanguage } from '../../../app.language';

export class CharacteristicsLocalizationRu implements CharacteristicsLocalization {
  getAttr() {
    return 'Привлекательность';
  }

  getCharacteristics() {
    return 'Характеристики';
  }

  getDependCharacteristics() {
    return 'Зависит от характеристик';
  }

  getBody() {
    return 'Тип телосложения';
  }

  getBtm() {
    return 'Модификатор типа телосложения';
  }

  getCarry() {
    return 'Переносимый вес, кг';
  }

  getLift() {
    return 'Возможность поднять, кг';
  }

  getHeader() {
    return 'Характеристики';
  }

  getCool() {
    return 'Хладнокровие';
  }

  getEmp() {
    return 'Эмпатия';
  }

  getHumanity() {
    return 'Человечность';
  }

  getInt() {
    return 'Интеллект';
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }

  getLeap() {
    return 'Дальность прыжка';
  }

  getLuck() {
    return 'Удача';
  }

  getMa() {
    return 'Скорость передвижения';
  }

  getRef() {
    return 'Рефлексы';
  }

  getRun() {
    return 'Дальность бега';
  }

  getTech() {
    return 'Технические способности';
  }
}
