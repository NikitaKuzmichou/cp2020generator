import { AppLanguage } from '../../app.language';
import {EnLocalizationFactory} from './en.localization';
import {RuLocalizationFactory} from './ru.localization';

export class LocalizationResolver {
  static getLocalizationFactory(language: AppLanguage) {
    switch (language) {
      case AppLanguage.ENGLISH:
        return new EnLocalizationFactory();
      case AppLanguage.RUSSIAN:
        return new RuLocalizationFactory();
    }
  }
}
