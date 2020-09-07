import { Localization } from '../../../localization';

export interface DressLocalization extends Localization {
  getHeader();
  getClothes();
  getClothesByRoll(roll: number);
  getHairstyle();
  getHairstyleByRoll(roll: number);
  getAffectations();
  getAffectationsByRoll(roll: number);
}
