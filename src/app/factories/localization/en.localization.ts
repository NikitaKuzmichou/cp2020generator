import { LocalizationFactory } from './localization';
import { NavLocalizationEn } from '../../localization/nav/nav.en';
import { CharacterLocalizationEn } from '../../localization/character/character.en';

export class EnLocalizationFactory implements LocalizationFactory {
  getCharacterLocalization() {
    return new CharacterLocalizationEn();
  }

  getNavLocalization() {
    return new NavLocalizationEn();
  }
}
