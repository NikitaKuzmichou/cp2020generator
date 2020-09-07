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
    return 'За каждый прожитый после 16 лет год происходит по одному событию';
  }
}
