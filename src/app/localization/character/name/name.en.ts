import { NameLocalization } from './name';
import { AppLanguage } from '../../../app.language';
import { NamesGenerationOptions } from '../../../character/options/names.generation.options';

export class NameLocalizationEn implements NameLocalization {

  getNameHeader() {
    return 'Character name';
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }

  getNameOption(option: string) {
    switch (NamesGenerationOptions[option]) {
      case NamesGenerationOptions.MALE:
        return 'Male';
      case NamesGenerationOptions.FEMALE:
        return 'Female';
      case NamesGenerationOptions.CHINESE_MALE:
        return 'Chinese male';
      case NamesGenerationOptions.CHINESE_FEMALE:
        return 'Chinese female';
      case NamesGenerationOptions.JAPANESE_MALE:
        return 'Japanese male';
      case NamesGenerationOptions.JAPANESE_FEMALE:
        return 'Japanese female';
      case NamesGenerationOptions.RUSSIAN_MALE:
        return 'Russian male';
      case NamesGenerationOptions.RUSSIAN_FEMALE:
        return 'Russian female';
      case NamesGenerationOptions.NETRUNNER_HANDLE:
        return 'Netrunner handle';
    }
  }
}
