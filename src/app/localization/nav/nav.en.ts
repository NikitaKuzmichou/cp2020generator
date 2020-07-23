import { NavLocalization } from './nav';
import { AppLanguage } from '../../app.language';

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
    return AppLanguage.ENGLISH;
  }
}
