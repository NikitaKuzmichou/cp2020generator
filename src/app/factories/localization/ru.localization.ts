import { LocalizationFactory } from './localization';
import { NavLocalizationRu } from '../../localization/nav/nav.ru';
import { ButtonsLocalizationRu } from '../../localization/buttons/buttons.ru';
import { CharacterLocalizationRu } from '../../localization/character/character.ru';
import { CharacteristicsLocalizationRu } from '../../localization/character/characteristics/characteristics.ru';
import { EthnicLocalizationRu } from '../../localization/character/background/ethnic/ethnic.ru';
import { DressLocalizationRu } from '../../localization/character/background/dress/dress.ru';
import { MotivationLocalizationRu } from '../../localization/character/background/motivations/motivation.ru';
import { FamilyLocalizationRu } from '../../localization/character/background/family/family.ru';
import { EventsLocalizationRu } from '../../localization/character/background/events/events.ru';
import { RomanticEventsLocalizationRu } from '../../localization/character/background/events/romantic/romantic.events.ru';
import { ProblemsWinsEventsLocalizationRu } from '../../localization/character/background/events/problems-and-wins/problems.wins.events.ru';
import { NothingHappenedEventsLocalizationRu } from '../../localization/character/background/events/nothing-happened/nothing.happened.events.ru';
import { FriendsEnemiesEventsLocalizationRu } from '../../localization/character/background/events/friends-and-enemies/friends.enemies.events.ru';

export class RuLocalizationFactory implements LocalizationFactory {
  getCharacterLocalization() {
    return new CharacterLocalizationRu();
  }

  getNavLocalization() {
    return new NavLocalizationRu();
  }

  getButtonsLocalization() {
    return new ButtonsLocalizationRu();
  }

  getCharacteristicsLocalization() {
    return new CharacteristicsLocalizationRu();
  }

  getCharacterEthnicLocalization() {
    return new EthnicLocalizationRu();
  }

  getCharacterDressLocalization() {
    return new DressLocalizationRu();
  }

  getMotivationLocalization() {
    return new MotivationLocalizationRu();
  }

  getFamilyLocalization() {
    return new FamilyLocalizationRu();
  }

  getEventsLocalization() {
    return new EventsLocalizationRu();
  }

  getRomanticEventsLocalization() {
    return new RomanticEventsLocalizationRu();
  }

  getProblemsWinsEventsLocalization() {
    return new ProblemsWinsEventsLocalizationRu();
  }

  getNothingHappenedEventsLocalization() {
    return new NothingHappenedEventsLocalizationRu();
  }

  getFriendsEnemiesEventsLocalization() {
    return new FriendsEnemiesEventsLocalizationRu();
  }
}
