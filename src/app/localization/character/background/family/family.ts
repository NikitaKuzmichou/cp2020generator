import { Localization } from '../../../localization';

export interface FamilyLocalization extends Localization {
  getGenerate();
  getHeader();
  getRanking();
  getRankingByRoll(roll: number);
  getParents();
  getParentsByRoll(roll: number);
  getHappedEvent();
  getHappedEventByRoll(roll: number);
  getStatus();
  getStatusByRoll(roll: number);
  getChildEnv();
  getChildEnvByRoll(roll: number);
  getTragedy();
  getTragedyByRoll(roll: number);
  getSibling();
  getNumSiblingsByRoll(roll: number);
  getSiblingGenderByRoll(roll: number);
  getSiblingAgeByRoll(roll: number);
  getSiblingFeelingsByRoll(roll: number);
}
