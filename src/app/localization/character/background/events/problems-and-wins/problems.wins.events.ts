import { Localization } from '../../../../localization';

export interface ProblemsWinsEventsLocalization extends Localization {
  getHeader();
  getDisaster();
  getDisasterByRoll(roll: number);
  getLucky();
  getLuckyByRoll(roll: number);
  getWhatGonnaDo();
  getWhatGonnaDoByRoll(roll: number);
}
