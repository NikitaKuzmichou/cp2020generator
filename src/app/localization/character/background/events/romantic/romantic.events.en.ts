import { AppLanguage } from '../../../../../app.language';
import { RomanticEventsLocalization } from './romantic.events';

export class RomanticEventsLocalizationEn implements RomanticEventsLocalization {
  getHeader() {
    return 'Romantic involvement';
  }

  getGeneratedPerson() {
    return 'It was';
  }

  getHowWorked() {
    return 'How it worked out';
  }

  getHowWorkedByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'Happy love affair';
      case 5:
        return 'Tragic love affair';
      case 6:
      case 7:
        return 'Love affair with problems';
      case 8:
      case 9:
      case 10:
        return 'Fast Affairs and Hot Dates';
    }
  }

  getLoveWithProblems() {
    return 'Love affair with problems';
  }

  getLoveWithProblemsByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Your lover\'s friends/family hate you';
      case 2:
        return 'Your lover\'s friends/family would use any means to get rid of you';
      case 3:
        return 'Your friends/family hate your lover';
      case 4:
        return 'One of you has a romantic rival';
      case 5:
        return 'You are separated in some way';
      case 6:
        return 'You fight constantly';
      case 7:
        return 'You\'re professional rivals';
      case 8:
        return 'One of you is insanely jealous';
      case 9:
        return 'One of you is "messing around"';
      case 10:
        return 'You have conflicting backgrounds and families';
    }
  }

  getTragicLove() {
    return 'Tragic love affair';
  }

  getTragicLoveByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Lover died in accident';
      case 2:
        return 'Lover mysteriously vanished';
      case 3:
        return 'It didn\'t work out';
      case 4:
        return 'A personal goal or vendetta came between you';
      case 5:
        return 'Lover kidnapped';
      case 6:
        return 'Lover went insane';
      case 7:
        return 'Lover committed suicide';
      case 8:
        return 'Lover killed in a fight';
      case 9:
        return 'Rival cut you out of the action';
      case 10:
        return 'Lover imprisoned or exiled';
    }
  }

  getMutualFeelings() {
    return 'Mutual feelings';
  }

  getMutualFeelingsByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'They still love you';
      case 2:
        return 'You still love them';
      case 3:
        return 'You still love each other';
      case 4:
        return 'You hate them';
      case 5:
        return 'They hate you';
      case 6:
        return 'You hate each other';
      case 7:
        return 'You\'re friends';
      case 8:
        return 'No feeling\'s either way; it\'s over';
      case 9:
        return 'You like them, they hate you';
      case 10:
        return 'They like you, you hate them';
    }
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }
}
