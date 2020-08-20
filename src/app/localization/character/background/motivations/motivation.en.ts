import { MotivationLocalization } from './motivation';
import { AppLanguage } from '../../../../app.language';

export class MotivationLocalizationEn implements MotivationLocalization {
  getHeader() {
    return 'What makes you tick? ' +
      'Will you back up your friends or go for the main chance? ' +
      'What\'s important to you?';
  }

  getGenerate() {
    return 'Generate';
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }

  getPersonalTraits() {
    return 'PERSONALITY TRAITS';
  }

  getPersonTraitByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Shy and secretive';
      case 2:
        return 'Rebellious, antisocial, violent';
      case 3:
        return 'Arrogant, proud and aloof';
      case 4:
        return 'Moody, rash and headstrong';
      case 5:
        return 'Picky fussy and nervous';
      case 6:
        return 'Stable and serious';
      case 7:
        return 'Silly and fluffheaded';
      case 8:
        return 'Sneaky and deceptive';
      case 9:
        return 'Intellectual and detached';
      case 10:
        return 'Friendly and outgoing';
      default:
        return 'Something goes wrong';
    }
  }

  getValuePerson() {
    return 'PERSON YOU VALUE MOST';
  }

  getValuePersonByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'A parent';
      case 2:
        return 'Brother or sister';
      case 3:
        return 'Lover';
      case 4:
        return 'Friend';
      case 5:
        return 'Yourself';
      case 6:
        return 'A pet';
      case 7:
        return 'Teacher or mentor';
      case 8:
        return 'Public figure';
      case 9:
        return 'A personal hero';
      case 10:
        return 'No one';
      default:
        return 'Something goes wrong';
    }
  }

  getValueMost() {
    return 'WHAT DO YOU VALUE MOST?';
  }

  getValueMostByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Money';
      case 2:
        return 'Honor';
      case 3:
        return 'Your word';
      case 4:
        return 'Honesty';
      case 5:
        return 'Knowledge';
      case 6:
        return 'Vengeance';
      case 7:
        return 'Love';
      case 8:
        return 'Power';
      case 9:
        return 'Having a good time';
      case 10:
        return 'Friendship';
      default:
        return 'Something goes wrong';
    }
  }

  getFeelAboutPeople() {
    return 'HOW DO YOU FEEL ABOUT MOST PEOPLE?';
  }

  getFeelAboutPeopleByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
        return 'Neutral';
      case 3:
        return 'I like almost everyone';
      case 4:
        return 'I hate almost everyone';
      case 5:
        return 'People are tools. Use them for your own goals and discard them';
      case 6:
        return 'Every person is a valuable individual';
      case 7:
        return 'People are obstacles to be destroyed if they cross me';
      case 8:
        return 'People are untrustworthy. Don\'t depend on anyone';
      case 9:
        return 'Wipe\'em all out and give the place to the cockroaches';
      case 10:
        return 'People are wonderful';
      default:
        return 'Something goes wrong';
    }
  }

  getValuedPossession() {
    return 'YOUR MOST VALUED POSSESSION';
  }

  getValuedPossessionByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'A weapon';
      case 2:
        return 'A tool';
      case 3:
        return 'A piece of clothing';
      case 4:
        return 'A photograph';
      case 5:
        return 'A book or diary';
      case 6:
        return 'A recording';
      case 7:
        return 'A musical instrument';
      case 8:
        return 'A piece of jewelry';
      case 9:
        return 'A toy';
      case 10:
        return 'A letter';
      default:
        return 'Something goes wrong';
    }
  }
}
