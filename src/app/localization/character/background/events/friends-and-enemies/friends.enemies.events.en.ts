import { AppLanguage } from '../../../../../app.language';
import { FriendsEnemiesEventsLocalization } from './friends.enemies.events';
import { DiceD6 } from '../../../../../service/dices/dice.d6';

export class FriendsEnemiesEventsLocalizationEn implements FriendsEnemiesEventsLocalization {
  getHeader() {
    return 'Friends & enemies';
  }

  getFriendEnemies(roll: number) {
    if (roll < 6) {
      return 'You made a friend';
    } else {
      return 'You made an enemy';
    }
  }

  getFriendsEnemiesByRoll(roll: number) {
    if (roll % 2 === 0) {
      return 'It\'s a male. His personal style and motivation';
    } else {
      return 'It\'s a woman. Her personal style and motivation';
    }
  }

  //TODO
  getGeneratePerson() {
    return '';
  }

  getFriend() {
    return 'Your relationship to this friend';
  }

  getFriendByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Like a big brother/sister to you';
      case 2:
        return 'Like a kid sister/brother to you';
      case 3:
        return 'A teacher or mentor';
      case 4:
        return 'A partner or co-worker';
      case 5:
        return 'An old lover (choose which one)';
      case 6:
        return 'An old enemy (choose which one)';
      case 7:
        return 'Like a foster parent to you';
      case 8:
        return 'A relative';
      case 9:
        return 'Reconnect with an old childhood friend';
      case 10:
        return 'Met through a common interest';
    }
  }

  getEnemy() {
    return 'This enemy is';
  }

  getEnemyByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Ex friend';
      case 2:
        return 'Ex lover';
      case 3:
        return 'Relative';
      case 4:
        return 'Childhood enemy';
      case 5:
        return 'Person working for you';
      case 6:
        return 'Person you work for';
      case 7:
        return 'Partner or co-worker';
      case 8:
        return 'Booster gang member';
      case 9:
        return 'Corporate Exec';
      case 10:
        return 'Government Official';
    }
  }

  getCause() {
    return 'The cause';
  }

  getCauseByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Caused the other to lose face or status';
      case 2:
        return 'Caused the loss of a lover, friend or relative';
      case 3:
        return 'Caused a major humiliation';
      case 4:
        return 'Accused the other of cowardice or some other personal flaw';
      case 5:
        return 'Caused a physical disability: ' + this.getDisability();
      case 6:
        return 'Deserted or betrayed the other';
      case 7:
        return 'Turned down other\'s offer of job or romantic involvement';
      case 8:
        return 'You just didn\'t like each other';
      case 9:
        return 'Was a romantic rival';
      case 10:
        return 'Foiled a plan of the other\'s';
    }
  }

  private getDisability() {
    const d6 = new DiceD6();
    switch (d6.roll()) {
      case 1:
      case 2:
        return 'lose eye';
      case 3:
      case 4:
        return 'lose arm';
      case 5:
      case 6:
        return 'badly scarred';
    }
  }

  getWhosFracked() {
    return 'Who\'s fracked off?';
  }

  getWhosFrackedByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'They hate you';
      case 5:
      case 6:
      case 7:
        return 'You hate them';
      case 8:
      case 9:
      case 10:
        return 'The feeling\'s mutual';
    }
  }

  getWhatGonnaDo() {
    return 'Whatcha\' gonna do about it';
  }

  getWhatGonnaDoByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
        return 'Go into a murderous killing rage and rip his face off!';
      case 3:
      case 4:
        return 'Avoid the scum';
      case 5:
      case 6:
        return 'Backstab him indirectly';
      case 7:
      case 8:
        return 'Ignore the scum';
      case 9:
      case 10:
        return 'Rip into him verbally';
    }
  }

  getWhatHeCanThrow() {
    return 'What can he throw against you';
  }

  getWhatHeCanThrowByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
        return 'Just himself';
      case 4:
      case 5:
        return 'Himself and a few friends';
      case 6:
      case 7:
        return 'An entire Gang';
      case 8:
        return 'A small Corporation';
      case 9:
        return 'A large Corporation';
      case 10:
        return 'An entire Government Agency';
    }
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }
}
