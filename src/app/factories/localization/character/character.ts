import { CharacterLocalizationFactoryEn } from './character.en';
import { CharacterLocalizationFactoryRu } from './character.ru';
import { AppLanguage } from 'src/app/app.language';

export class CharacterLocalizationFactory {
  static getLocalization(language: AppLanguage) {
    switch (language) {
      case AppLanguage.RUSSIAN:
        return CharacterLocalizationFactoryRu.getLocalization();
      case AppLanguage.ENGLISH:
        return CharacterLocalizationFactoryEn.getLocalization();
    }
  }
}
