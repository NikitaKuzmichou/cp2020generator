import { NavLocalizationRu } from 'src/app/localization/nav/nav.localization.ru';

export class LocalizationFactoryRu {
  static getLocalization() {
    return new NavLocalizationRu();
  }
}
