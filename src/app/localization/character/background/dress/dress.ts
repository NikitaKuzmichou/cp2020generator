import { Localization } from '../../../localization';

export interface DressLocalization extends Localization {
  getGenerate();
  getHeader();
  getClothes();
  getClothesByRoll(roll: number);
  getHairstyle();
  getHairstyleByRoll(roll: number);
  getAffectations();
  getAffectationsByRoll(roll: number);
}
