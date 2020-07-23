import { NavLocalizationFactoryEn } from './nav.en';
import { NavLocalizationFactoryRu } from './nav.ru';
import { AppLanguage } from 'src/app/app.language';

export class NavLocalizationFactory {
  static getLocalization(language: AppLanguage) {
    switch (language) {
      case AppLanguage.RUSSIAN:
        return NavLocalizationFactoryRu.getLocalization();
      case AppLanguage.ENGLISH:
        return NavLocalizationFactoryEn.getLocalization();
    }
  }
}
