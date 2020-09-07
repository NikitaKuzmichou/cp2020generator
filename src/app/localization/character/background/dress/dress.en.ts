import { DressLocalization } from './dress';
import { AppLanguage } from '../../../../app.language';

export class DressLocalizationEn implements DressLocalization {
  getLanguage() {
    return AppLanguage.ENGLISH;
  }

  getHeader() {
    return 'Dress and personal style';
  }

  getClothes() {
    return 'Clothes';
  }

  getClothesByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Biker leathers';
      case 2:
        return 'Blue jeans';
      case 3:
        return 'Corporate suits';
      case 4:
        return 'Jump suits';
      case 5:
        return 'Mini skirts';
      case 6:
        return 'High fashion';
      case 7:
        return 'Cammos';
      case 8:
        return 'Normal clothes';
      case 9:
        return 'Nude';
      case 10:
        return 'Bag lady chic';
      default:
        return 'Something goes wrong';
    }
  }

  getHairstyle() {
    return 'Hairstyle';
  }

  getHairstyleByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Mohawk';
      case 2:
        return 'Long & ratty';
      case 3:
        return 'Short & spiked';
      case 4:
        return 'Wild & all over';
      case 5:
        return 'Bald';
      case 6:
        return 'Striped';
      case 7:
        return 'Tinted';
      case 8:
        return 'Neat, short';
      case 9:
        return 'Short, curly';
      case 10:
        return 'Long, straight';
      default:
        return 'Something goes wrong';
    }
  }

  getAffectations() {
    return 'Affectations';
  }

  getAffectationsByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Tatoos';
      case 2:
        return 'Mirrorshades';
      case 3:
        return 'Ritual scars';
      case 4:
        return 'Spiked gloves';
      case 5:
        return 'Nose Rings';
      case 6:
        return 'Earrings';
      case 7:
        return 'Long fingernails';
      case 8:
        return 'Spike heeled boots';
      case 9:
        return 'Weird contact lenses';
      case 10:
        return 'Fingerless gloves';
      default:
        return 'Something goes wrong';
    }
  }
}
