import { EthnicLocalization } from './ethnic';
import { AppLanguage } from '../../../../app.language';

export class EthnicLocalizationEn implements EthnicLocalization {
  getAfrican() {
    return ['African',
      ['Bantu', 'Fante', 'Kongo', 'Ashanti', 'Zulu', 'Swahili']];
  }

  getAngloAmerican() {
    return ['Anglo-American', ['English']];
  }

  getBlackAmerican() {
    return ['Black American',
      ['English', 'Blackfolk']];
  }

  getChinese() {
    return ['Chinese/Southeast Asian',
      ['Burmese', 'Cantonese', 'Mandarin', 'Thai', 'Tibetan', 'Vietnamese']];
  }

  getEuropean() {
    return ['European',
      ['French', 'German', 'English', 'Spanish', 'Italian',
        'Greek', 'Danish', 'Norwegian', 'Swedish', 'Finnish']];
  }

  getHispanicAmerican() {
    return ['Hispanic American',
      ['Spanish', 'English']];
  }

  getKorean() {
    return ['Japanese/Korean',
      ['Japanese', 'Korean']];
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }

  getPacificIslander() {
    return ['Pacific Islander',
      ['Micronesian', 'Tagalog', 'Polynesian', 'Malayan',
        'Sudanese', 'Indonesian', 'Hawaiian']];
  }

  getSouthAmerican() {
    return ['Central/South American',
      ['Spanish', 'Portuguese']];
  }

  getSoviet() {
    return ['Central European/Soviet',
      ['Bulgarian', 'Russian', 'Polish', 'Ukrainian', 'Slovak']];
  }
}
