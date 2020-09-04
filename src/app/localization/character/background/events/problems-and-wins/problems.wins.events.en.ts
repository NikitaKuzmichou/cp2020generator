import { AppLanguage } from '../../../../../app.language';
import { ProblemsWinsEventsLocalization } from './problems.wins.events';
import { DiceD10 } from '../../../../../service/dices/dice.d10';

export class ProblemsWinsEventsLocalizationEn implements ProblemsWinsEventsLocalization {
  private d10 = new DiceD10();

  getHeader() {
    return 'Big problems, big wins';
  }

  getDisaster() {
    return 'Disaster strikes';
  }

  getDisasterByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Financial Loss or Debt. You have lost '
          + this.getFinancial() + ' eurodollars. ' +
          'If you can\'t pay this now, you have a debt to pay, in cash - or blood.';
      case 2:
        return 'Imprisonment: You have been in prison, ' +
          'of possibly held hostage (your choice) '
          + this.getImprisonment() + ' months.';
      case 3:
        return 'Illness or addiction: You have contracted ' +
          'either an illness or drug habit in this time. ' +
          'Lost 1 pt of REF permanently as a result.';
      case 4:
        return 'Betrayal: you have been backstabbed in some manner. ' +
          this.getBetrayal();
      case 5:
        return 'Accident: You were in some kind of terrible accident. ' +
          this.getAccident();
      case 6:
        return 'Lover, friend or relative killed: ' +
          'You lost someone you really cared about. ' + this.getRelativeKilled();
      case 7:
        return 'False Accusation: You were set up. ' +
          this.getFalseAccusation();
      case 8:
        return 'Hunted by the Law: You are hunted by the law ' +
          '(or crimes you may or may not have committed (your choice)). ' +
          this.getHuntedLaw();
      case 9:
        return 'Hunted by a Corporation: You have angered some corporate honcho. ' +
          this.getHuntedCorporation();
      case 10:
        return 'Mental or physical incapacitation: You have experienced ' +
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
        return 'You are being blackmailed.';
      case 4:
      case 5:
      case 6:
      case 7:
        return 'A secret was exposed.';
      case 8:
      case 9:
      case 10:
        return 'You were betrayed by a close friend in either' +
          ' romance or career (you choose).';
    }
  }

  private getAccident() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'You were terribly disfigured and must subtract -5 from your ATT.';
      case 5:
      case 6:
        return 'You were hospitalized for ' + this.d10.roll() + ' months that year.';
      case 7:
      case 8:
        return 'You have lost ' + this.d10.roll() + ' months of memory of that year.';
      case 9:
      case 10:
        return 'You constantly relive nightmares (8 in 10 chance each night) ' +
          'of the accident and wake up screaming.';
    }
  }

  private getRelativeKilled() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return 'They died accidentally.';
      case 6:
      case 7:
      case 8:
        return 'They were murdered by unknown parties.';
      case 9:
      case 10:
        return 'They were murdered and you know who did it. You just need the proof.';
    }
  }

  private getFalseAccusation() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'The accusation is theft.';
      case 4:
      case 5:
        return 'It\'s cowardice.';
      case 6:
      case 7:
      case 8:
        return 'It\'s murder.';
      case 9:
        return 'It\'s rape.';
      case 10:
        return 'It\'s lying or betrayal.';
    }
  }

  private getHuntedLaw() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'Only a couple local cops want you.';
      case 4:
      case 5:
      case 6:
        return 'It\'s the entire local force.';
      case 7:
      case 8:
        return 'It\'s the State Police or Militia.';
      case 9:
      case 10:
        return 'It\'s the FBI or equivalent national police force.';
    }
  }

  private getHuntedCorporation() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'It\'s a small, local firm.';
      case 4:
      case 5:
      case 6:
        return 'It\'s a larger corp with offices statewide.';
      case 7:
      case 8:
        return 'It\'s a big, national corp with agents in major cities nationwide.';
      case 9:
      case 10:
        return 'It\'s a huge multinational with armies, ninja and spies everywhere.';
    }
  }

  private getIncapacitation() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
        return 'It\'s some type of nervous disorder, probably from a ' +
          'bioplague - lose 1 pt. REF.';
      case 4:
      case 5:
      case 6:
      case 7:
        return 'It\'s tome kind of mental problem; ' +
          'you suffer anxiety attacks and phobias. Lose 1 pt from your CL stat.';
      case 8:
      case 9:
      case 10:
        return 'It\'s a major psychosis. You hear voices, ' +
          'are violent, irrational, depressive. Lose 1 pt from your CL, 1 from REF.';
    }
  }

  getLucky() {
    return 'You get lucky';
  }

  getLuckyByRoll(roll: number) {
    switch (roll) {
      case 1:
        return 'Make a Powerful Connection in City Government. ' +
          this.getPowerfulConnection();
      case 2:
        return 'Financial Windfall: you get' + this.getFinancial() +
          ' for amount in Eurodollars.';
      case 3:
        return 'Big Score on job or deal! You get' + this.getFinancial() +
          ' for amount in Eurodollars.';
      case 4:
        return 'Find a Sensei (teacher). Begin at +2 ' +
          'or add +1 to a Martial Arts Skill of your choice.';
      case 5:
        return 'Find a Teacher: Add +1 to any INT based skill, ' +
          'or begin a new INT based skill at +2.';
      case 6:
        return 'Powerful Corporate Exec owes you one favor.';
      case 7:
        return 'Local Nomad Pack befriends you. ' +
          'You can call upon them for one favor a month, ' +
          'equivalent to a Family Special Ability of +2.';
      case 8:
        return 'Make a Friend on the Police Force. ' +
          'You may use him for inside information ' +
          'at a level of +2 Streetwise on any police related situation.';
      case 9:
        return 'Local Boostergang likes you ' +
          '(Who knows why. These are Boosters, right?). ' +
          'You can call upon them for 1 favor a month, ' +
          'equivalent to a Family Special Ability of +2. But don\'t push it.';
      case 10:
        return 'Find a Combat Teacher. Add +1 to any weapon skill ' +
          'with the exception of Martial Arts or Brawling, ' +
          'or begin a new combat skill at +2.';
    }
  }

  private getPowerfulConnection() {
    switch (this.d10.roll()) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'It\'s in the Police Dept.';
      case 5:
      case 6:
      case 7:
        return 'Its in the District Attorney\'s Office.';
      case 8:
      case 9:
      case 10:
        return 'It\'s in the Mayor\'s Office.';
    }
  }

  getWhatGonnaDo() {
    return 'What are you gonna do about it';
  }

  getWhatGonnaDoByRoll(roll: number) {
    switch (roll) {
      case 1:
      case 2:
        return 'Clear your name';
      case 3:
      case 4:
        return 'Live it down and try to forget it';
      case 5:
      case 6:
        return 'Hunt down those responsible and make them pay!';
      case 7:
      case 8:
        return 'Get what\'s rightfully yours';
      case 9:
      case 10:
        return 'Save, if possible, anyone else involved in the situation';
    }
  }

  getLanguage() {
    return AppLanguage.ENGLISH;
  }
}
