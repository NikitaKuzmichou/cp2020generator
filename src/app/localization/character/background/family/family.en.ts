import { FamilyLocalization } from './family';
import { AppLanguage } from '../../../../app.language';

export class FamilyLocalizationEn implements FamilyLocalization {

  getHeader() {
    return 'Family Background';
  }

  getRanking() {
    return 'Family ranking';
  }

  getRankingByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Corporate Executive';
      case 2:
        return 'Corporate Manager';
      case 3:
        return 'Corporate Technician';
      case 4:
        return 'Nomad Pack';
      case 5:
        return 'Pirate Fleet';
      case 6:
        return 'Gang Family';
      case 7:
        return 'Crime Lord';
      case 8:
        return 'Combat Zone Poor';
      case 9:
        return 'Urban homeless';
      case 10:
        return 'Arcology family';
      default:
        return 'Something goes wrong';
    }
  }

  getParents() {
    return 'Parents';
  }

  getParentsByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 'Both parents are living';
      case 7:
      case 8:
      case 9:
      case 10:
        return 'Something has happened to one or both parents';
      default:
        return 'Something goes wrong';
    }
  }

  getHappedEvent() {
    return 'Something happened to your parents';
  }

  getHappedEventByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Your parent(s) died in warfare';
      case 2:
        return 'Your parent(s) died in an accident';
      case 3:
        return 'Your parent(s) were murdered';
      case 4:
        return 'Your parent(s) have amnesia and don\'t remember you';
      case 5:
        return 'You never knew your parent(s)';
      case 6:
        return 'Your parent(s) are in hiding to protect you';
      case 7:
        return 'You were left with relatives for safekeeping';
      case 8:
        return 'You grew up on the Street and never had parents';
      case 9:
        return 'Your parent(s) gave you up for adoption';
      case 10:
        return 'Your parent(s) sold you for money';
      default:
        return 'Something goes wrong';
    }
  }

  getStatus() {
    return 'Family status';
  }

  getStatusByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 'Family status in danger, and you risk losing everything (if you haven\'t already)';
      case 7:
      case 8:
      case 9:
      case 10:
        return 'Family status is OK, even if parents are missing or dead';
      default:
        return 'Something goes wrong';
    }
  }

  getChildEnv() {
    return 'Childhood environment';
  }

  getChildEnvByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Spent on the Street with no adult supervision';
      case 2:
        return 'Spent in a safe Corporate Suburbia';
      case 3:
        return 'In a Nomad Pack moving from town to town';
      case 4:
        return 'In a decaying, once upscale neighborhood';
      case 5:
        return 'In a defended Corporate Zone in the central City';
      case 6:
        return 'In the heart of the Combat Zone';
      case 7:
        return 'In a small village or town far from the City';
      case 8:
        return 'In a large arcology city';
      case 9:
        return 'In a aquatic Pirate Pack';
      case 10:
        return 'On a Corporate controlled Farm or Research Facility';
      default:
        return 'Something goes wrong';
    }
  }

  getTragedy() {
    return 'Family tragedy';
  }

  getTragedyByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Family lost everything through betrayal';
      case 2:
        return 'Family lost everything through bad management';
      case 3:
        return 'Family exiled or otherwise driven from their original home/nation/corporation';
      case 4:
        return 'Family is imprisoned and you alone escaped';
      case 5:
        return 'Family vanished. You are only remaining member';
      case 6:
        return 'Family was murdered/killed and you were only survivor';
      case 7:
        return 'Family is involved in longterm conspiracy, organization or association, such as a crime family or revolutionary group';
      case 8:
        return 'Your family was scattered to the winds due to misfortune';
      case 9:
        return 'Your family is cursed with a hereditary feud that has lasted for generation';
      case 10:
        return 'You are the inheritor of a family debt; you must honor this debt before moving on with your life';
      default:
        return 'Something goes wrong';
    }
  }

  getSibling() {
    return 'Siblings';
  }

  getNumSiblingsByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return 'You have ' + roll + ' brothers/sisters';
      default:
        return 'You are an only child';
    }
  }

  getSiblingGenderByRoll(roll: number) {
    if (roll % 2 === 0) {
      return 'The sibling is male';
    } else {
      return 'The sibling is female';
    }
  }

  getSiblingAgeByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return 'Sibling is older than you';
      case 6:
      case 7:
      case 8:
      case 9:
        return 'Sibling is younger than you';
      case 10:
        return 'Sibling is your twin';
      default:
        return 'Something goes wrong';
    }
  }

  getSiblingFeelingsByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
        return 'Sibling dislike you';
      case 3:
      case 4:
        return 'Sibling likes you';
      case 5:
      case 6:
        return 'Sibling neutral';
      case 7:
      case 8:
        return 'They hero worship you';
      case 9:
      case 10:
        return 'They are hate you';
      default:
        return 'Something goes wrong';
    }
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }
}
