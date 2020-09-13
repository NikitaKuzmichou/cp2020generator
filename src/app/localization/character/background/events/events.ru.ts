import { AppLanguage } from '../../../../app.language';
import { EventsLocalization } from './events';

export class EventsLocalizationRu implements EventsLocalization {
  getHeader() {
    return 'Жизненные события';
  }

  getAge() {
    return 'Возраст';
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }

  getEvents() {
    return 'События';
  }

  getDescription() {
    return 'За каждый год, прожитый после 16 лет, происходит по одному событию';
  }

  getAnotherYear() {
    return 'Ещё один год';
  }
}
