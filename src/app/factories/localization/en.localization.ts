import { LocalizationFactory } from './localization';
import { NavLocalizationEn } from '../../localization/nav/nav.en';
import { ButtonsLocalizationEn } from '../../localization/buttons/buttons.en';
import { CharacterLocalizationEn } from '../../localization/character/character.en';
import { CharacteristicsLocalizationEn } from '../../localization/character/characteristics/characteristics.en';
import { EthnicLocalizationEn } from '../../localization/character/background/ethnic/ethnic.en';
import { DressLocalizationEn } from '../../localization/character/background/dress/dress.en';
import { MotivationLocalizationEn } from '../../localization/character/background/motivations/motivation.en';
import { FamilyLocalizationEn } from '../../localization/character/background/family/family.en';
import { FriendsEnemiesEventsLocalizationEn } from '../../localization/character/background/events/friends-and-enemies/friends.enemies.events.en';
import { NothingHappenedEventsLocalizationEn } from '../../localization/character/background/events/nothing-happened/nothing.happened.events.en';
import { ProblemsWinsEventsLocalizationEn } from '../../localization/character/background/events/problems-and-wins/problems.wins.events.en';
import { RomanticEventsLocalizationEn } from '../../localization/character/background/events/romantic/romantic.events.en';
import { EventsLocalizationEn } from '../../localization/character/background/events/events.en';
import { NameLocalizationEn } from '../../localization/character/name/name.en';

export class EnLocalizationFactory implements LocalizationFactory {

  getCharacterLocalization() {
    return new CharacterLocalizationEn();
  }

  getNavLocalization() {
    return new NavLocalizationEn();
  }

  getButtonsLocalization() {
    return new ButtonsLocalizationEn();
  }

  getCharacteristicsLocalization() {
    return new CharacteristicsLocalizationEn();
  }

  getNameLocalization() {
    return new NameLocalizationEn();
  }

  getCharacterEthnicLocalization() {
    return new EthnicLocalizationEn();
  }

  getCharacterDressLocalization() {
    return new DressLocalizationEn();
  }

  getMotivationLocalization() {
    return new MotivationLocalizationEn();
  }

  getFamilyLocalization() {
    return new FamilyLocalizationEn();
  }


  getEventsLocalization() {
    return new EventsLocalizationEn();
  }

  getRomanticEventsLocalization() {
    return new RomanticEventsLocalizationEn();
  }

  getProblemsWinsEventsLocalization() {
    return new ProblemsWinsEventsLocalizationEn();
  }

  getNothingHappenedEventsLocalization() {
    return new NothingHappenedEventsLocalizationEn();
  }

  getFriendsEnemiesEventsLocalization() {
    return new FriendsEnemiesEventsLocalizationEn();
  }
}
