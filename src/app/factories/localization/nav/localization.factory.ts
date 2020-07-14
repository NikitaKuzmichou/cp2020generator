import { LocalizationFactoryRu } from './localization.factory.ru';
import { LocalizationFactoryEn } from './localization.factory.en';
import { AppLanguage } from 'src/app/app.language';

export class LocalizationFactory {
  getLocalization(language: AppLanguage) {
    switch (language) {
      case AppLanguage.RUSSIAN:
        return LocalizationFactoryRu.getLocalization();
      case AppLanguage.ENGLISH:
        return LocalizationFactoryEn.getLocalization();
    }
  }
}
