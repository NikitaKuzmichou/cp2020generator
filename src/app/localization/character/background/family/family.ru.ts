import { FamilyLocalization } from './family';
import { AppLanguage } from '../../../../app.language';

export class FamilyLocalizationRu implements FamilyLocalization {
  getGenerate() {
    return 'Сгенерировать';
  }

  getHeader() {
    return 'Предыстория семьи';
  }

  getRanking() {
    return 'Уровень семьи';
  }

  getRankingByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Работники корпорации';
      case 2:
        return 'Корпоративные менеджеры';
      case 3:
        return 'Корпоративные техники';
      case 4:
        return 'Банда кочевников';
      case 5:
        return 'Пираты';
      case 6:
        return 'Гангстерская семья';
      case 7:
        return 'Лорды преступности';
      case 8:
        return 'Нищие из боевоей зоны';
      case 9:
        return 'Городские нищие';
      case 10:
        return 'Археологи';
      default:
        return 'Что-то пошло не так';
    }
  }

  getParents() {
    return 'РОДИТЕЛИ';
  }

  getParentsByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 'Оба родителя живы';
      case 7:
      case 8:
      case 9:
      case 10:
        return 'Что-то случилось с одним или двумя родителями';
      default:
        return 'Что-то пошло не так';
    }
  }

  getHappedEvent() {
    return 'ЧТО-ТО СЛУЧИЛОСЬ С ТВОИМИ РОДИТЕЛЯМИ';
  }

  getHappedEventByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Твои родители погибли на войне';
      case 2:
        return 'Твои родители умерли из-за катастрофы';
      case 3:
        return 'Твои родители были убиты';
      case 4:
        return 'У твоих родителей амнезия и они не помнят тебя';
      case 5:
        return 'Ты никогда не знал(а) своих родителей';
      case 6:
        return 'Твои родители скрываются, чтобы защитить тебя';
      case 7:
        return 'Родители бросили тебя на произвол судьбы';
      case 8:
        return 'Ты вырос(ла) на улице и никогда не видел(а) родителей';
      case 9:
        return 'Твои родители отдали тебя на усыновление';
      case 10:
        return 'Твои родители продали тебя за деньги';
      default:
        return 'Что-то пошло не так';
    }
  }

  getStatus() {
    return 'СЕМЕЙНЫЙ СТАТУС';
  }

  getStatusByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 'Семья в опасности и ты рискуешь потерять всё (если уже не потерял(а))';
      case 7:
      case 8:
      case 9:
      case 10:
        return 'С семьёй всё впорядке, даже если родители пропали или мертвы';
      default:
        return 'Что-то пошло не так';
    }
  }

  getChildEnv() {
    return 'ДЕТСТВО';
  }

  getChildEnvByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Проведено на улице без присмотра взрослых';
      case 2:
        return 'Проведено в безопасном корпоративном пригородном поселении';
      case 3:
        return 'В банде кочевников, путешествующей из города в город';
      case 4:
        return 'В умирающем, некогда престижном районе города';
      case 5:
        return 'В охраняемой корпоративной зоне центрального города';
      case 6:
        return 'В центре боевой зоны';
      case 7:
        return 'В небольшой деревне или посёлке далеко от города';
      case 8:
        return 'В большом археологическом городе';
      case 9:
        return 'В водной пиратской банде';
      case 10:
        return 'На ферме или исследовательком центре корпорации';
      default:
        return 'Что-то пошло не так';
    }
  }

  getTragedy() {
    return 'СЕМЕЙНАЯ ТРАГЕДИЯ';
  }

  getTragedyByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Семья потеряла всё из-за предательства';
      case 2:
        return 'Семья потеряла всё из-за плохого управления';
      case 3:
        return 'Семья изгнана или иным образом выселена из родного дома/страны/корпорации';
      case 4:
        return 'Семья в тюрьме, ты один избежал(а) правосудия';
      case 5:
        return 'Семья пропала без вести. Остался(ась) только ты';
      case 6:
        return 'Семья была убита и ты единственный(ая), кому повезло остаться в живых';
      case 7:
        return 'Семья вовлечена какую-либо организацию, такую как преступная семья или группа революционеров';
      case 8:
        return 'Твоя семья разбросана по миру из-за неудачи';
      case 9:
        return 'Семья находится в состоянии постоянного конфликта, тянущегося из поколения в поколение';
      case 10:
        return 'Тебе достался семейный долг. Тебе предстоит отплатить за него, прежде чем жить жить собственной жизнью';
      default:
        return 'Что-то пошло не так';
    }
  }

  getSibling() {
    return 'Братья и сёстры';
  }

  getNumSiblingsByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return 'У тебя ' + roll + ' братьев/сестрёр';
      case 8:
      case 9:
      case 10:
        return 'Ты единственный ребёнок';
      default:
        return 'Что-то пошло не так';
    }
  }

  getSiblingGenderByRoll(roll: number) {
    if (roll % 2 === 0) {
      return 'Брат';
    } else {
      return 'Сестра';
    }
  }

  getSiblingAgeByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return 'Старше тебя';
      case 6:
      case 7:
      case 8:
      case 9:
        return 'Младше тебя';
      case 10:
        return 'Твой близнец';
      default:
        return 'Что-то пошло не так';
    }
  }

  getSiblingFeelingsByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
        return 'Недолюбливает тебя';
      case 3:
      case 4:
        return 'Хорошо к тебе относится';
      case 5:
      case 6:
        return 'Относится к тебе нейтрально';
      case 7:
      case 8:
        return 'Считает тебя героем';
      case 9:
      case 10:
        return 'Ненавидит тебя';
      default:
        return 'Что-то пошло не так';
    }
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }
}
