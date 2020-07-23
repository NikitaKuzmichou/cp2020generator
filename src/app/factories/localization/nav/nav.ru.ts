import { NavLocalizationRu } from 'src/app/localization/nav/nav.ru';

export class NavLocalizationFactoryRu {
  static getLocalization() {
    return new NavLocalizationRu();
  }
}
