import { AppLanguage } from '../../../../app.language';
import { EventsLocalization } from './events';

export class EventsLocalizationEn implements EventsLocalization {
  getHeader() {
    return 'Life events';
  }

  getAge() {
    return 'Age';
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }

  getEvents() {
    return 'Events';
  }

  getDescription() {
    return 'For each year lived after 16 years occurs one event';
  }

  getAnotherYear() {
    return 'Another year';
  }
}
