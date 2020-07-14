import { NavLocalization } from './nav.localization';

export class NavLocalizationEn implements NavLocalization {
  getCharacter() {
    return 'character';
  }

  getImplants() {
    return 'implants';
  }

  getNpc() {
    return 'npc';
  }

  getWeapon() {
    return 'weapon';
  }

  getLanguage() {
    return 'english';
  }
}
