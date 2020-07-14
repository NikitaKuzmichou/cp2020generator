import { NavLocalizationEn } from 'src/app/localization/nav/nav.localization.en';

export class LocalizationFactoryEn {
  static getLocalization() {
    return new NavLocalizationEn();
  }
}
