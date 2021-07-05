import { NameLocalization } from './name';
import { AppLanguage } from '../../../app.language';
import { NamesGenerationOptions } from '../../../character/options/names.generation.options';

export class NameLocalizationRu implements NameLocalization {

  getNameHeader() {
    return 'Имя персонажа';
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }

  getNameOption(option: string) {
    switch (NamesGenerationOptions[option]) {
      case NamesGenerationOptions.MALE:
        return 'Мужское';
      case NamesGenerationOptions.FEMALE:
        return 'Женское';
      case NamesGenerationOptions.CHINESE_MALE:
        return 'Мужское китайское';
      case NamesGenerationOptions.CHINESE_FEMALE:
        return 'Женское китайское';
      case NamesGenerationOptions.JAPANESE_MALE:
        return 'Мужское японское';
      case NamesGenerationOptions.JAPANESE_FEMALE:
        return 'Женское японское';
      case NamesGenerationOptions.RUSSIAN_MALE:
        return 'Мужское русское';
      case NamesGenerationOptions.RUSSIAN_FEMALE:
        return 'Женское русское';
      case NamesGenerationOptions.NETRUNNER_HANDLE:
        return 'Погоняло нетраннера';
    }
  }
}
