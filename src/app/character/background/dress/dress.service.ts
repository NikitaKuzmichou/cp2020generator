import { DressLocalization } from 'src/app/localization/character/background/dress/dress';

export class DressService {
  getClothes(roll: number, localization: DressLocalization) {
    switch (roll) {
      case 1:
        return localization.getBikerLeathers();
      case 2:
        return localization.getBlueJeans();
      case 3:
        return localization.getCorporateSuits();
      case 4:
        return localization.getJumpsuits();
      case 5:
        return localization.getMiniSkirts();
      case 6:
        return localization.getHighFashion();
      case 7:
        return localization.getCammos();
      case 8:
        return localization.getNormalClothes();
      case 9:
        return localization.getNude();
      case 10:
        return localization.getBagLadyChic();
      default:
        return null;
    }
  }

  getHairstyle(roll: number, localization: DressLocalization) {
    switch (roll) {
      case 1:
        return localization.getMohawk();
      case 2:
        return localization.getLongRatty();
      case 3:
        return localization.getShortSpiked();
      case 4:
        return localization.getWild();
      case 5:
        return localization.getBald();
      case 6:
        return localization.getStriped();
      case 7:
        return localization.getTinted();
      case 8:
        return localization.getNeat();
      case 9:
        return localization.getShort();
      case 10:
        return localization.getLong();
      default:
        return null;
    }
  }

  getAffectations(roll: number, localization: DressLocalization) {
    switch (roll) {
      case 1:
        return localization.getTatoos();
      case 2:
        return localization.getMirrorshades();
      case 3:
        return localization.getRitualScars();
      case 4:
        return localization.getSpikedGloves();
      case 5:
        return localization.getNoseRings();
      case 6:
        return localization.getEarrings();
      case 7:
        return localization.getLongFingernails();
      case 8:
        return localization.getHeeledBoots();
      case 9:
        return localization.getContactLenses();
      case 10:
        return localization.getFingerlessGloves();
      default:
        return null;
    }
  }
}
