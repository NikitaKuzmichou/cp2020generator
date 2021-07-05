import { ButtonsLocalization } from './buttons';
import { AppLanguage } from '../../app.language';

export class ButtonsLocalizationRu implements ButtonsLocalization {
  getGenerate() {
    return 'Сгенерировать';
  }

  getHideOptions() {
    return 'Скрыть опции';
  }

  getShowOptions() {
    return 'Показать опции для генерации';
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }
}
