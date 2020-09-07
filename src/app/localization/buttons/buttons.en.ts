import { ButtonsLocalization } from './buttons';
import { AppLanguage } from '../../app.language';

export class ButtonsLocalizationEn implements ButtonsLocalization {
  getGenerate() {
    return 'Generate';
  }

  getHideOptions() {
    return 'Hide options';
  }

  getShowOptions() {
    return 'Show generation options';
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }

}
