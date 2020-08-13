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

  getBikerLeathers() {
    return 'Байкерская кожанка';
  }

  getBlueJeans() {
    return 'Синие джинсы';
  }

  getCorporateSuits() {
    return 'Корпоративный костюм';
  }

  getJumpsuits() {
    return 'Комбинезон';
  }

  getMiniSkirts() {
    return 'Мини-юбка';
  }

  getHighFashion() {
    return 'Высокая мода';
  }

  getCammos() {
    /**TODO*/
    return 'Cammos';
  }

  getNormalClothes() {
    return 'Обычная одежда';
  }

  getNude() {
    return 'Одежда отсутсвует';
  }

  getBagLadyChic() {
    return 'Bag lady chic';
  }

  getHairstyle() {
    return 'Причёска';
  }

  getMohawk() {
    /**TODO*/
    return 'Mohawk';
  }

  getLongRatty() {
    return 'Длинная и крысиная';
  }

  getShortSpiked() {
    return 'Короткая с шипами';
  }

  getWild() {
    return 'Беспорядочная, дикая';
  }

  getBald() {
    return 'Плешивая';
  }

  getStriped() {
    return 'В полоску';
  }

  getTinted() {
    return 'Крашеные волосы';
  }

  getNeat() {
    return 'Аккуратная, короткая';
  }

  getShort() {
    return 'Короткая, кудрявая';
  }

  getLong() {
    return 'Длинная, прямая';
  }

  getAffectations() {
    return 'Особенности';
  }

  getTatoos() {
    return 'Татуировки';
  }

  getMirrorshades() {
    return 'Зеркальные очки';
  }

  getRitualScars() {
    return 'Ритуальные шрамы';
  }

  getSpikedGloves() {
    return 'Перчатки с шипами';
  }

  getNoseRings() {
    return 'Кольца в носу';
  }

  getEarrings() {
    return 'Серьги';
  }

  getLongFingernails() {
    return 'Длинные ногти';
  }

  getHeeledBoots() {
    return 'Каблуки';
  }

  getContactLenses() {
    return 'Странные контактные линзы';
  }

  getFingerlessGloves() {
    return 'Перчатки без пальцев';
  }
}
