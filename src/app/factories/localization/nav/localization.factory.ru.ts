import { NavLocalizationRu } from 'src/app/localization/nav/nav.localization.ru';

export class NavLocalizationFactoryRu {
  static getLocalization() {
    return new NavLocalizationRu();
  }
}
