import { Localization } from '../../../localization';

export interface MotivationLocalization extends Localization {
  getHeader();
  getPersonalTraits();
  getPersonTraitByRoll(roll: number);
  getValuePerson();
  getValuePersonByRoll(roll: number);
  getValueMost();
  getValueMostByRoll(roll: number);
  getFeelAboutPeople();
  getFeelAboutPeopleByRoll(roll: number);
  getValuedPossession();
  getValuedPossessionByRoll(roll: number);
}
