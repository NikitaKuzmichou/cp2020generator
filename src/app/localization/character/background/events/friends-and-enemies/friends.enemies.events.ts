import { Localization } from '../../../../localization';

export interface FriendsEnemiesEventsLocalization extends Localization {
  getHeader();
  getFriendEnemies(roll: number);
  getFriendsEnemiesByRoll(roll: number);
  getGeneratePerson();
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
