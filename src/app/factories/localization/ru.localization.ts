import { LocalizationFactory } from './localization';
import { NavLocalizationRu } from '../../localization/nav/nav.ru';
import { CharacterLocalizationRu } from '../../localization/character/character.ru';
import { CharacteristicsLocalizationRu } from '../../localization/character/characteristics/characteristics.ru';
import { EthnicLocalizationRu } from '../../localization/character/background/ethnic/ethnic.ru';
import { DressLocalizationRu } from '../../localization/character/background/dress/dress.ru';
import { MotivationLocalizationRu } from '../../localization/character/background/motivations/motivation.ru';

export class RuLocalizationFactory implements LocalizationFactory {
  getCharacterLocalization() {
    return new CharacterLocalizationRu();
  }

  getNavLocalization() {
    return new NavLocalizationRu();
  }

  getCharacteristicsLocalization() {
    return new CharacteristicsLocalizationRu();
  }

  getCharacterEthnicLocalization() {
    return new EthnicLocalizationRu();
  }

  getCharacterDressLocalization() {
    return new DressLocalizationRu();
  }

  getMotivationLocalization() {
    return new MotivationLocalizationRu();
  }
}
