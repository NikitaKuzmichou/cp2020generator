import { MotivationLocalization } from './motivation';
import { AppLanguage } from '../../../../app.language';

export class MotivationLocalizationRu implements MotivationLocalization {
  getHeader() {
    return 'Мотивация';
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }

  getPersonalTraits() {
    return 'Черты характера';
  }

  getPersonTraitByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Застенчивый и скрытный';
      case 2:
        return 'Мятежный, ассоциальный, жестокий';
      case 3:
        return 'Высокомерный, гордый и отчужденный';
      case 4:
        return 'Угрюмый, опрометчивый и упрямый';
      case 5:
        return 'Придирчивый, суетливый и нервный';
      case 6:
        return 'Устойчивый и серьезный';
      case 7:
        return 'Глупый и пустоголовый';
      case 8:
        return 'Подлый и обманчивый';
      case 9:
        return 'Интеллектуальный и отстраненный';
      case 10:
        return 'Дружелюбный и общительный';
      default:
        return 'Что-то пошло не так';
    }
  }

  getValuePerson() {
    return 'Личность, которую ты ценишь больше всего';
  }

  getValuePersonByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Родитель';
      case 2:
        return 'Брат или сестра';
      case 3:
        return 'Возлюбленный';
      case 4:
        return 'Друг';
      case 5:
        return 'Самого себя';
      case 6:
        return 'Домашнее животное';
      case 7:
        return 'Учитель или наставник';
      case 8:
        return 'Общественный деятель';
      case 9:
        return 'Личный герой';
      case 10:
        return 'Никто';
      default:
        return 'Что-то пошло не так';
    }
  }

  getValueMost() {
    return 'Что для тебя важнее всего?';
  }

  getValueMostByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Деньги';
      case 2:
        return 'Честь';
      case 3:
        return 'Своё обещание';
      case 4:
        return 'Честность';
      case 5:
        return 'Знания';
      case 6:
        return 'Месть';
      case 7:
        return 'Любовь';
      case 8:
        return 'Силу';
      case 9:
        return 'Хорошее времепровождение';
      case 10:
        return 'Дружбу';
      default:
        return 'Что-то пошло не так';
    }
  }

  getFeelAboutPeople() {
    return 'Как ты относишься к большинству людей?';
  }

  getFeelAboutPeopleByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
        return 'Нейтрально';
      case 3:
        return 'Нравятся почти все';
      case 4:
        return 'Неприязнь почти ко всем';
      case 5:
        return 'Люди - это инструмент. Используешь их в своих целях, а потом бросаешь';
      case 6:
        return 'Каждый человек - драгоценная индивидуальность';
      case 7:
        return 'Люди - это препятствия, от которых нужно избавиться, если они будут мешать';
      case 8:
        return 'Люди ненадёжны. Никому нельзя доверять';
      case 9:
        return 'Размазать их всех, освободив место для тараканов';
      case 10:
        return 'Люди прекрасны';
      default:
        return 'Что-то пошло не так';
    }
  }

  getValuedPossession() {
    return 'Самый значимый для тебя предмет';
  }

  getValuedPossessionByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Оружие';
      case 2:
        return 'Инструмент';
      case 3:
        return 'Часть одежды';
      case 4:
        return 'Фотография';
      case 5:
        return 'Книга или дневник';
      case 6:
        return 'Запись';
      case 7:
        return 'Музыкальный инструмент';
      case 8:
        return 'Ювелирное изделие';
      case 9:
        return 'Игрушка';
      case 10:
        return 'Письмо';
      default:
        return 'Что-то пошло не так';
    }
  }
}
