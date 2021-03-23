import { LifeEvent } from './life.event';
import { LifeEventType } from './life.event.type';

export class LifeEventsResolver {
  isProblemsWinsEvent(event: LifeEvent) {
    return event.type === LifeEventType.problemsWins;
  }

  isDisasterEvent(event: LifeEvent) {
    if (this.isProblemsWinsEvent(event)) {
      return event.getRoll(0) % 2 !== 0;
    }
    return false;
  }

  isLuckEvent(event: LifeEvent) {
    if (this.isProblemsWinsEvent(event)) {
      return event.getRoll(0) % 2 === 0;
    }
    return false;
  }

  isFriendsEnemiesEvent(event: LifeEvent) {
    return event.type === LifeEventType.friendsEnemies;
  }

  isFriend(event: LifeEvent) {
    if (this.isFriendsEnemiesEvent(event)) {
      return event.getRoll(0) < 6;
    }
    return false;
  }

  isEnemy(event: LifeEvent) {
    if (this.isFriendsEnemiesEvent(event)) {
      return event.getRoll(0) > 5;
    }
    return false;
  }

  isRomanticEvent(event: LifeEvent) {
    return event.type === LifeEventType.romantic;
  }

  isTragicLove(event: LifeEvent) {
    if (this.isRomanticEvent(event)) {
      return event.getRoll(0) === 5;
    }
    return false;
  }

  isLoveAffair(event: LifeEvent) {
    if (this.isRomanticEvent(event)) {
      return event.getRoll(0) > 5 && event.getRoll(0) < 8;
    }
    return false;
  }

  isNothingHappenedEvent(event: LifeEvent) {
    return event.type === LifeEventType.nothing;
  }
}
