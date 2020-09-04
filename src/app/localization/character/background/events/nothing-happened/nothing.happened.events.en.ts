import { NothingHappenedEventsLocalization } from './nothing.happened.events';
import { AppLanguage } from '../../../../../app.language';

export class NothingHappenedEventsLocalizationEn implements NothingHappenedEventsLocalization {
  getHeader() {
    return 'Nothing happened that year';
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }
}
