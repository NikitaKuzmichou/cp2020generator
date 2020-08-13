import { LocalizationFactory } from './localization';
import { NavLocalizationEn } from '../../localization/nav/nav.en';
import { CharacterLocalizationEn } from '../../localization/character/character.en';
import { CharacteristicsLocalizationEn } from '../../localization/character/characteristics/characteristics.en';
import { EthnicLocalizationEn } from '../../localization/character/background/ethnic/ethnic.en';
import { DressLocalizationEn } from '../../localization/character/background/dress/dress.en';

export class EnLocalizationFactory implements LocalizationFactory {
  getCharacterLocalization() {
    return new CharacterLocalizationEn();
  }

  getNavLocalization() {
    return new NavLocalizationEn();
  }

  getCharacteristicsLocalization() {
    return new CharacteristicsLocalizationEn();
  }

  getCharacterEthnicLocalization() {
    return new EthnicLocalizationEn();
  }

  getCharacterDressLocalization() {
    return new DressLocalizationEn();
  }
}
