import { EthnicLocalization } from './ethnic';
import { AppLanguage } from '../../../../app.language';

export class EthnicLocalizationEn implements EthnicLocalization {
  getHeader() {
    return 'Ethnic origins';
  }

  getOrigin() {
    return 'Origin';
  }

  getOriginByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'African';
      case 2:
        return 'Anglo-American';
      case 3:
        return 'Black American';
      case 4:
        return 'Chinese/Southeast Asian';
      case 5:
        return 'European';
      case 6:
        return 'Hispanic American';
      case 7:
        return 'Japanese/Korean';
      case 8:
        return 'Pacific Islander';
      case 9:
        return 'Central/South American';
      case 10:
        return 'Central European/Soviet';
      default:
        return 'Something goes wrong';
    }
  }

  getLanguages() {
    return 'Languages';
  }

  getLanguagesByRoll(roll: number) {
    switch (roll) {
      case 1:
        return ['Bantu', 'Fante', 'Kongo', 'Ashanti', 'Zulu', 'Swahili'];
      case 2:
        return ['English'];
      case 3:
        return ['English', 'Blackfolk'];
      case 4:
        return ['Burmese', 'Cantonese', 'Mandarin', 'Thai', 'Tibetan', 'Vietnamese'];
      case 5:
        return ['French', 'German', 'English', 'Spanish', 'Italian',
          'Greek', 'Danish', 'Norwegian', 'Swedish', 'Finnish'];
      case 6:
        return ['Spanish', 'English'];
      case 7:
        return ['Japanese', 'Korean'];
      case 8:
        return ['Micronesian', 'Tagalog', 'Polynesian', 'Malayan',
          'Sudanese', 'Indonesian', 'Hawaiian'];
      case 9:
        return ['Spanish', 'Portuguese'];
      case 10:
        return ['Bulgarian', 'Russian', 'Polish', 'Ukrainian', 'Slovak'];
      default:
        return 'Something goes wrong';
    }
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }
}
