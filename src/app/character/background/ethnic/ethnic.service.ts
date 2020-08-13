import { EthnicLocalization } from '../../../localization/character/background/ethnic/ethnic';

export class EthnicService {
  getEthnicOrigin(roll: number, localization: EthnicLocalization) {
    switch (roll) {
      case 1:
        return localization.getAngloAmerican();
      case 2:
        return localization.getAfrican();
      case 3:
        return localization.getKorean();
      case 4:
        return localization.getSoviet();
      case 5:
        return localization.getPacificIslander();
      case 6:
        return localization.getChinese();
      case 7:
        return localization.getBlackAmerican();
      case 8:
        return localization.getHispanicAmerican();
      case 9:
        return localization.getSouthAmerican();
      case 10:
        return localization.getEuropean();
      default:
        return null;
    }
  }
}
