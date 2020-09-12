import { Localization } from '../../../../localization';

export interface FriendsEnemiesEventsLocalization extends Localization {
  getHeader();
  getFriendEnemy(roll: number);
  getFriendsEnemiesGender(roll: number);
  getGeneratedPerson(roll: number);
  getFriend();
  getFriendByRoll(roll: number);
  getEnemy();
  getEnemyByRoll(roll: number);
  getCause();
  getCauseByRoll(roll: number);
  getWhosFracked();
  getWhosFrackedByRoll(roll: number);
  getWhatGonnaDo();
  getWhatGonnaDoByRoll(roll: number);
  getWhatHeCanThrow();
  getWhatHeCanThrowByRoll(roll: number);
}
