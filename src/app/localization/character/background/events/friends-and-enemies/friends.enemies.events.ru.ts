import { AppLanguage } from '../../../../../app.language';
import { FriendsEnemiesEventsLocalization } from './friends.enemies.events';
import {DiceD6} from '../../../../../service/dices/dice.d6';

export class FriendsEnemiesEventsLocalizationRu implements FriendsEnemiesEventsLocalization {
  getHeader() {
    return 'Друзья и враги';
  }

  getFriendEnemy(roll: number) {
    if (roll < 6) {
      return 'У тебя появился друг';
    } else {
      return 'У тебя появился враг';
    }
  }

  getFriendsEnemiesGender(roll: number) {
    if (roll % 2 === 0) {
      return 'Это мужчина';
    } else {
      return 'Это женщина';
    }
  }

  getGeneratedPerson(roll: number) {
    if (roll % 2 === 0) {
      return 'его внешний вид и мотивация:';
    } else {
      return 'её внешний вид и мотивация';
    }
  }

  getFriend() {
    return 'Ваши отношения с этим другом';
  }

  getFriendByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Для тебя как старший брат/сестра';
      case 2:
        return 'Для тебя как младший брак/сестра';
      case 3:
        return 'Учитель/наставник';
      case 4:
        return 'Партнёр/коллега по работе';
      case 5:
        return 'Старый возлюбенный(ая) (выбери кто именно)';
      case 6:
        return 'Старый враг (выбери кто именно)';
      case 7:
        return 'Как второй отец/мать';
      case 8:
        return 'Родственник';
      case 9:
        return 'Старый друг детства';
      case 10:
        return 'Встретились по общим интересам';
    }
  }

  getEnemy() {
    return 'Этот враг';
  }

  getEnemyByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Бывший друг';
      case 2:
        return 'Бывший возлюбленный(ая)';
      case 3:
        return 'Родственник';
      case 4:
        return 'Враг детства';
      case 5:
        return 'Человек, работавший на тебя';
      case 6:
        return 'Человек, на которого ты работал';
      case 7:
        return 'Партрнёр или напарник';
      case 8:
        return 'Член мафии';
      case 9:
        return 'Шишка в корпорации';
      case 10:
        return 'Государственный служащий';
    }
  }

  getCause() {
    return 'Причина вражды';
  }

  getCauseByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Вызвана потерей лица или общественного положения';
      case 2:
        return 'Вызвана потерей возлюбленного, друга или родственника';
      case 3:
        return 'Вызвана сильным унижением';
      case 4:
        return 'Вызвана обвинением в трусости или другом личном недостатке';
      case 5:
        return 'Вызвана наненесением увечья: ' + this.getDisability();
      case 6:
        return 'Вызвана из-за того, что бросил или предал';
      case 7:
        return 'Увёл возлюбленного или отобрал работу';
      case 8:
        return 'Вы просто недолюбливаете друг-друга';
      case 9:
        return 'Был соперником в любовных отношениях';
      case 10:
        return 'Вызвана порчей планов другого';
    }
  }

  private getDisability() {
    const d6 = new DiceD6();
    switch (d6.roll()) {
      case 1:
      case 2:
        return 'потеря глаза';
      case 3:
      case 4:
        return 'потеря руки';
      case 5:
      case 6:
        return 'шрамы на теле';
    }
  }

  getWhosFracked() {
    return 'Кто облажался';
  }

  getWhosFrackedByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'Он ненавидит тебя';
      case 5:
      case 6:
      case 7:
        return 'Ты ненавидишь его';
      case 8:
      case 9:
      case 10:
        return 'Ваши чувства взаимны';
    }
  }

  getWhatGonnaDo() {
    return 'Что ты сделаешь, если встретитесь лицом к лицу';
  }

  getWhatGonnaDoByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
        return 'Впадёте в ярость и разобьёте ему морду';
      case 3:
      case 4:
        return 'Постараетесь избежать встречи с ублюдком';
      case 5:
      case 6:
        return 'Нанесёте удар в спину не своими руками';
      case 7:
      case 8:
        return 'Проигнорируете этого ублюдка';
      case 9:
      case 10:
        return 'Словесно унизите его';
    }
  }

  getWhatHeCanThrow() {
    return 'Какие силы он может бросить против тебя';
  }

  getWhatHeCanThrowByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
        return 'Разберётся лично';
      case 4:
      case 5:
        return 'Он сам и несколько друзей';
      case 6:
      case 7:
        return 'Силы уличной банды';
      case 8:
        return 'Силы небольшой корпорации';
      case 9:
        return 'Силы большой корпорации';
      case 10:
        return 'Силы правительственной организации';
    }
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }
}
