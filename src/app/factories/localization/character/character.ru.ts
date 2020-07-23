import { CharacterLocalizationRu } from '../../../localization/character/character.ru';

export class CharacterLocalizationFactoryRu {
  static getLocalization() {
    return new CharacterLocalizationRu();
  }
}
