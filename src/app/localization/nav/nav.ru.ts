import { NavLocalization } from './nav';
import { AppLanguage } from '../../app.language';

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
    return AppLanguage.RUSSIAN;
  }
}
