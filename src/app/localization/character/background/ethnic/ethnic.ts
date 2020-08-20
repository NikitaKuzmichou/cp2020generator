import { Localization } from '../../../localization';

export interface EthnicLocalization extends Localization {
  getGenerate();
  getHeader();
  getOrigin();
  getOriginByRoll(roll: number);
  getLanguages();
  getLanguagesByRoll(roll: number);

}
