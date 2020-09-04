import { Localization } from '../../../../localization';

export interface RomanticEventsLocalization extends Localization{
  getHeader();
  getGeneratedPerson();
  getHowWorked();
  getHowWorkedByRoll(roll: number);
  getLoveWithProblems();
  getLoveWithProblemsByRoll(roll: number);
  getTragicLove();
  getTragicLoveByRoll(roll: number);
  getMutualFeelings();
  getMutualFeelingsByRoll(roll: number);
}
