import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { LifeEventsOptions } from '../../options/life.events.options';

import { EventsLocalization } from '../../../localization/character/background/events/events';
import { RomanticEventsLocalization } from '../../../localization/character/background/events/romantic/romantic.events';
import { ProblemsWinsEventsLocalization } from '../../../localization/character/background/events/problems-and-wins/problems.wins.events';
import { NothingHappenedEventsLocalization } from '../../../localization/character/background/events/nothing-happened/nothing.happened.events';
import { FriendsEnemiesEventsLocalization } from '../../../localization/character/background/events/friends-and-enemies/friends.enemies.events';

import { LifeEventsService } from './service/life.events.service';
import { LifeEvent } from './service/life.event';
import { LifeEventsResolver } from './service/life.events.resolver';

import { DressComponent } from '../dress/dress.component';
import { DressLocalization } from '../../../localization/character/background/dress/dress';
import { MotivationComponent } from '../motivation/motivation.component';
import { MotivationLocalization } from '../../../localization/character/background/motivations/motivation';
import { ButtonsLocalization } from '../../../localization/buttons/buttons';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private service: LifeEventsService;
  @Input() options: LifeEventsOptions;
  @Input() localization: EventsLocalization;
  @Input() btnLocalization: ButtonsLocalization;
  @Input() romanticLocalization: RomanticEventsLocalization;
  @Input() problAndWinsLocalization: ProblemsWinsEventsLocalization;
  @Input() nothHappLocalization: NothingHappenedEventsLocalization;
  @Input() friendsEnemLocalization: FriendsEnemiesEventsLocalization;
  @Input() dressLocalization: DressLocalization;
  @Input() motivationLocalization: MotivationLocalization;
  @ViewChild(DressComponent)
  private dress: DressComponent;
  @ViewChild(MotivationComponent)
  private motivation: MotivationComponent;
  resolver: LifeEventsResolver;
  events: Array<LifeEvent>;
  isGenerated: boolean;

  constructor() { }

  ngOnInit(): void {
    this.service = new LifeEventsService();
    this.resolver = new LifeEventsResolver();
  }

  onGenerate() {
    if (this.options.selected) {
      this.initMotivation();
      this.initDress();
      this.motivation.onGenerate();
      this.dress.onGenerate();
      this.events = this.service.generateEvents(this.options);
      this.isGenerated = true;
    } else {
      return false;
    }
  }

  getDisaster(event: LifeEvent) {
    return this.problAndWinsLocalization.getDisasterByRoll(event.getRoll(0));
  }

  getWhatGonnaDoDisaster(event: LifeEvent) {
    return this.problAndWinsLocalization.getWhatGonnaDoByRoll(event.getRoll(1));
  }

  getLucky(event: LifeEvent) {
    return this.problAndWinsLocalization.getLuckyByRoll(event.getRoll(0));
  }

  getFriendEnemy(event: LifeEvent) {
    return this.friendsEnemLocalization.getFriendEnemy(event.getRoll(0)) +
      '. ' + this.friendsEnemLocalization.getFriendsEnemiesGender(event.getRoll(1));
  }

  getFriendEnemyStyleHeader(event: LifeEvent) {
    return ' ' + this.friendsEnemLocalization.getGeneratedPerson(event.getRoll(1));
  }

  getWhosFracked(event: LifeEvent) {
    return this.friendsEnemLocalization.getWhosFrackedByRoll(event.getRoll(4));
  }

  getWhatGonnaDoEnemy(event: LifeEvent) {
    return this.friendsEnemLocalization.getWhatGonnaDoByRoll(event.getRoll(5));
  }

  getWhatEnemyCanThrow(event: LifeEvent) {
    return this.friendsEnemLocalization.getWhatHeCanThrowByRoll(event.getRoll(6));
  }

  getTragicLove(event: LifeEvent) {
    return this.romanticLocalization.getTragicLoveByRoll(event.getRoll(1));
  }

  getMutualFeelings(event: LifeEvent) {
    return this.romanticLocalization.getMutualFeelingsByRoll(event.getRoll(2));
  }

  getLoveWithProblems(event: LifeEvent) {
    return this.romanticLocalization.getLoveWithProblemsByRoll(event.getRoll(1));
  }

  getEnemy(event: LifeEvent) {
    return this.friendsEnemLocalization.getEnemyByRoll(event.getRoll(2));
  }

  getEnemyCause(event: LifeEvent) {
    return this.friendsEnemLocalization.getCauseByRoll(event.getRoll(3));
  }

  /**here is some shitty code**/
  private initMotivation() {
    if (!this.motivation) {
      this.motivation = new MotivationComponent();
      this.motivation.selected = true;
      this.motivation.localization = this.motivationLocalization;
      this.motivation.btnLocalization = this.btnLocalization;
      this.motivation.generateAfterCreation = true;
      this.motivation.hideHeaderAndBtn = true;
      this.motivation.ngOnInit();
    }
  }

  private initDress() {
    if (!this.dress) {
      this.dress = new DressComponent();
      this.dress.selected = true;
      this.dress.localization = this.dressLocalization;
      this.dress.btnLocalization = this.btnLocalization;
      this.dress.generateAfterCreation = true;
      this.dress.hideHeaderAndBtn = true;
      this.dress.ngOnInit();
    }
  }
}
