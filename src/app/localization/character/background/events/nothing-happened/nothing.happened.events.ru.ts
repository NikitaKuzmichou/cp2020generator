import { NothingHappenedEventsLocalization } from './nothing.happened.events';
import { AppLanguage } from '../../../../../app.language';

export class NothingHappenedEventsLocalizationRu implements NothingHappenedEventsLocalization {
  getHeader() {
    return 'В этом году ничего не случилось';
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }
}
