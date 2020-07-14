import { NavLocalization } from './nav.localization';

export class NavLocalizationRu implements NavLocalization {
  getCharacter() {
    return 'персонаж';
  }

  getImplants() {
    return 'импланты';
  }

  getNpc() {
    return 'нпс';
  }

  getWeapon() {
    return 'оружие';
  }

  getLanguage() {
    return 'русский';
  }
}
