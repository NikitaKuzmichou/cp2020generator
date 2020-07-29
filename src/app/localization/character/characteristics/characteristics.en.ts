import { CharacteristicsLocalization } from './characteristics';
import {AppLanguage} from '../../../app.language';

export class CharacteristicsLocalizationEn implements CharacteristicsLocalization {
  getAttr() {
    return 'Attractiveness';
  }

  getBody() {
    return 'Body type';
  }

  getBtm() {
    return 'Body type modifier';
  }

  getCarry() {
    return 'Carry weight, kg';
  }

  getLift() {
    return 'Lift weight, kg';
  }

  getHeader() {
    return 'Character characteristics';
  }

  getCool() {
    return 'Cool';
  }

  getEmp() {
    return 'Empathy';
  }

  getGenerate() {
    return 'Generate';
  }

  getHumanity() {
    return 'Humanity';
  }

  getInt() {
    return 'Intelligence';
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }

  getLeap() {
    return 'Leap distance';
  }

  getLuck() {
    return 'Luck';
  }

  getMa() {
    return 'Movement allowance';
  }

  getRef() {
    return 'Reflexes';
  }

  getRun() {
    return 'Running distance';
  }

  getTech() {
    return 'Technical ability';
  }
}
