import { Localization } from '../../../localization';

export interface EthnicLocalization extends Localization {
  getHeader();
  getOrigin();
  getOriginByRoll(roll: number);
  getLanguages();
  getLanguagesByRoll(roll: number);
}
