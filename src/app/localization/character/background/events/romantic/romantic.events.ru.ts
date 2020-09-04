import { AppLanguage } from '../../../../../app.language';
import { RomanticEventsLocalization } from './romantic.events';

export class RomanticEventsLocalizationRu implements RomanticEventsLocalization {

  getHeader() {
    return 'Романтические отношения';
  }

  getGeneratedPerson() {
    return 'Это был: ';
  }

  getHowWorked() {
    return 'Как они происходили';
  }

  getHowWorkedByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'Счастливые отношения';
      case 5:
        return 'Трагические отношения';
      case 6:
      case 7:
        return 'Любовные отношения с проблемами';
      case 8:
      case 9:
      case 10:
        return 'Быстрые отношения и горячие свидания';
    }
  }

  getLoveWithProblems() {
    return 'Любовные отношения с проблемами';
  }

  getLoveWithProblemsByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Друзья/семья вашего возлюбленного ненавидят тебя';
      case 2:
        return 'Друзья/семья вашего возлюбленного воспользуются ' +
          'любыми средствами, чтобы избавиться от тебя';
      case 3:
        return 'Ваши друзья/семья ненавидят твоего возлюбленного';
      case 4:
        return 'Кто-то из вас борется с конкурентом в отношениях (любовный треугольник)';
      case 5:
        return 'Вы разошлись по каким-то причинам';
      case 6:
        return 'Вы постоянно ссорились';
      case 7:
        return 'Вы профессиональные конкуренты';
      case 8:
        return 'Один из вас безумно ревнив';
      case 9:
        return 'Один из вас "гуляет на сторону"';
      case 10:
        return 'Ваши семьи или семейный статус конфликтуют';
    }
  }

  getTragicLove() {
    return 'Трагические отношения';
  }

  getTragicLoveByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Возлюбленный умер в аварии';
      case 2:
        return 'Возлюбленный мистически пропал';
      case 3:
        return 'Ничего не вышло';
      case 4:
        return 'Личные цели или вендетта встали между вами';
      case 5:
        return 'Возлюбленный похищен';
      case 6:
        return 'Возлюбленный сошёл с ума';
      case 7:
        return 'Возлюбленный покончил жизнь самоубийством';
      case 8:
        return 'Возлюбленный убит в драке';
      case 9:
        return 'Соперник вывел тебя из игры';
      case 10:
        return 'Возлюбленный сидит в тюрьме или сослан';
    }
  }

  getMutualFeelings() {
    return 'Оставшиеся чувства';
  }

  getMutualFeelingsByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Возлюбленный всё ещё любит тебя';
      case 2:
        return 'Ты всё ещё любишь возлюбленного';
      case 3:
        return 'Вы до сих пор любите друг друга';
      case 4:
        return 'Ты ненавидишь его(её)';
      case 5:
        return 'Возлюбленный ненавидит тебя';
      case 6:
        return 'Вы ненавидите друг друга';
      case 7:
        return 'Вы остались друзьями';
      case 8:
        return 'Никаких чувств друг к другу. Всё кончено';
      case 9:
        return 'Ты всё ещё влюблён, возлюбленный тебя ненавидит';
      case 10:
        return 'В тебя всё ещё влюблены, ты ненавидишь возлюбленного';
    }
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }
}
