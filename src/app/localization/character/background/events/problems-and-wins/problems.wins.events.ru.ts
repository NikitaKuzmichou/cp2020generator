import { AppLanguage } from '../../../../../app.language';
import { ProblemsWinsEventsLocalization } from './problems.wins.events';
import { DiceD10 } from '../../../../../service/dices/dice.d10';

export class ProblemsWinsEventsLocalizationRu implements ProblemsWinsEventsLocalization {
  private d10 = new DiceD10();

  getHeader() {
    return 'Большие проблемы, большие победы';
  }

  getDisaster() {
    return 'Удар судьбы';
  }

  getDisasterByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Финансовые потери или задолженность. Ты потерял '
          + this.getFinancial() + ' евродолларов. ' +
          'Если вы не можете выплатить этой суммы сейчас, на тебе висит долг, ' +
          'который придется оплатить наличкой или кровью.';
      case 2:
        return 'Заключение: ты сидел в тюрьме, ' +
          'либо отрабатывал проступки перед законом (на свой выбор) на протяжении '
          + this.getImprisonment() + ' месяцев.';
      case 3:
        return 'Болезнь или пагубная привычка: за это время ты заболел ' +
          'или пристрастился к наркотикам. ' +
          'В результате ты навсегда теряешь 1 очко REF.';
      case 4:
        return 'Предательство: тебя подставили следующим образом: ' +
          this.getBetrayal();
      case 5:
        return 'Несчастный случай: ты попал в ужасную аварию. ' +
          this.getAccident();
      case 6:
        return 'Возлюбленный, друг или родственник убиты: ' +
          'ты потерял кого-то действительно дорогого. ' + this.getRelativeKilled();
      case 7:
        return 'Ложное обвинение: тебя подставили. ' +
          this.getFalseAccusation();
      case 8:
        return 'Неприятности с законом: ты объявлен в розыск ' +
          '(за преступление которое ты совершил, или не совершал (на твой выбор)). ' +
          this.getHuntedLaw();
      case 9:
        return 'За тобой охотится корпорация: ты рассердил корпоративного босса. ' +
          this.getHuntedCorporation();
      case 10:
        return 'Психическое или физическое расстройство: это из-за ' +
          this.getIncapacitation();
    }
  }

  private getFinancial() {
    return this.d10.roll() * 100;
  }

  private getImprisonment() {
    return this.d10.roll();
  }

  private getBetrayal() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'тебя шантажировали.';
      case 4:
      case 5:
      case 6:
      case 7:
        return 'твоя тайна была раскрыта.';
      case 8:
      case 9:
      case 10:
        return 'тебя предал близкий друг: увёл возлюбленного' +
          ' или кинул по карьерной линии (на твой выбор).';
    }
  }

  private getAccident() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'ты был ужасно обезображены и должен вычесть -5 из своей ATT.';
      case 5:
      case 6:
        return 'Ты был госпитализирован на ' + this.d10.roll() + ' месяцев в этом году.';
      case 7:
      case 8:
        return 'Ты потерял ' + this.d10.roll() + ' месяцев памяти из этого года.';
      case 9:
      case 10:
        return 'Тебе постоянно снятся кошмары (каждую ночь шанс 8 из 10), ' +
          'связанные с аварией и ты просыпаешься от собственного крика.';
    }
  }

  private getRelativeKilled() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return 'Погиб в результате несчастного случая.';
      case 6:
      case 7:
      case 8:
        return 'Убит группой неизвестных.';
      case 9:
      case 10:
        return 'Убит, и ты знаешь кто это сделал, но у тебя нет доказательств.';
    }
  }

  private getFalseAccusation() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'Обвинён в воровстве.';
      case 4:
      case 5:
        return 'Обвинён в трусости.';
      case 6:
      case 7:
      case 8:
        return 'Обвинён в убийстве.';
      case 9:
        return 'Обвинён в изнасиловании.';
      case 10:
        return 'Обвинён во лжи и предательстве.';
    }
  }

  private getHuntedLaw() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'Всего пара местных копов разыскивает вас.';
      case 4:
      case 5:
      case 6:
        return 'Тебя разыскивают все местные силы.';
      case 7:
      case 8:
        return 'Тебя разыскивает полиция всего штата.';
      case 9:
      case 10:
        return 'Тебя разыскивает ФБР или аналогичные силы полиции.';
    }
  }

  private getHuntedCorporation() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'Это небольшая местная фирма.';
      case 4:
      case 5:
      case 6:
        return 'Это корпорация средних размеров с офисами по всему штату.';
      case 7:
      case 8:
        return 'Это большая национальная корпорация с агентами в крупных городах по всей стране.';
      case 9:
      case 10:
        return 'Это огромная мультинациональная корпорация со своей армией, убийцами и шпионами повсюду.';
    }
  }

  private getIncapacitation() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'Это какое-то нервное расстройство, возможно из-за ' +
          'биопрошифки - потеряте 1 очко REF.';
      case 4:
      case 5:
      case 6:
      case 7:
        return 'Это какое-то психическое расстройство; ' +
          'вы страдаете от панических аттак и фобий. ' +
          'Потеряйте 1 очко вашей COOL характеристики.';
      case 8:
      case 9:
      case 10:
        return 'Это серьёзное расстройство. Вы слышите голоса, ' +
          'сколанные к иррациональному насилию и депрессии. ' +
          'Потеряйте 1 очко с COOL и 1 с REF.';
    }
  }

  getLucky() {
    return 'Вам повезло';
  }

  getLuckyByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Вы завели хорошие связи в городском управлении. ' +
          this.getPowerfulConnection();
      case 2:
        return 'Финансовые успехи: вы получили' + this.getFinancial() +
          ' в евродолларах.';
      case 3:
        return 'Болишая награда за работу или сделку! Вы получили ' + this.getFinancial() +
          ' в евродолларах.';
      case 4:
        return 'Вы нашли сенсея (учителя). ' +
          'Можете добавить новый рукопашный стиль боя (Martial Arts) +2 ' +
          '(по выбору), или улучшить уже имеющийся на 1.';
      case 5:
        return 'Вы нашли учителя: можете добавить +1 к любому имеющемуся ' +
          'умению основанному на INT, или добавить новое ' +
          '+2 характеристики INT.';
      case 6:
        return 'Получили право на одну услугу в могущественной корпорации.';
      case 7:
        return 'Подружились с местной бандой кочевников. ' +
          'Вы можете звонить им с одной просьбой в месяц, ' +
          'аналогично Семье (Family) +2.';
      case 8:
        return 'Подружились с человеком из полиции. Вы можете воспользоваться дружбой ' +
          'для получения информации как умением знание улиц (StreetWise) +2 ' +
          'на любые связанные с полицией ситуации.';
      case 9:
        return 'Вы понравились местной мафии (кто знает почему. Это же мафия, верно?). ' +
          'Вы можете звонить им раз в месяц, аналогично ' +
          'способности Семья (Family) +2. Но не давите' +
          'на них!';
      case 10:
        return 'Нашли инструктора по оружию. Добавьте ' +
          '+1 к любому известному оружейному умению, или изучите ' +
          'новое оружейное умение +2.';
    }
  }

  private getPowerfulConnection() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'В отделении полиции.';
      case 5:
      case 6:
      case 7:
        return 'В районной прокуратуре.';
      case 8:
      case 9:
      case 10:
        return 'В мэрии.';
    }
  }

  getWhatGonnaDo() {
    return 'Что вы предприняли из-за этого';
  }

  getWhatGonnaDoByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
        return 'Сменили имя';
      case 3:
      case 4:
        return 'Живёте дальше и стараетесь забыть об этом';
      case 5:
      case 6:
        return 'Будете охотиться на виновных и заставите их заплатить!';
      case 7:
      case 8:
        return 'Получите то, что принадлежит вам по праву';
      case 9:
      case 10:
        return 'Спасли, по возможности, всех тех, кто ещё мог пострадать от ситуации';
    }
  }

  getLanguage() {
    return AppLanguage.RUSSIAN;
  }
}
