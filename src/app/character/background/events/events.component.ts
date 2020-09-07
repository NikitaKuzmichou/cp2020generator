import {Component, Input, OnInit, ViewChild} from '@angular/core';

import { LifeEventsOptions } from './life.events.options';

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
  private dress;
  @ViewChild(MotivationComponent)
  private motivation;
  resolver: LifeEventsResolver;
  events: Array<LifeEvent>;
  isGenerated: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isGenerated = false;
    this.service = new LifeEventsService();
    this.resolver = new LifeEventsResolver();
  }

  onGenerate() {
    if (this.options.selected) {
      this.isGenerated = true;
      this.events = this.service.generateEvents(this.options);
      this.motivation.onGenerate();
      this.dress.onGenerate();
    } else {
      return false;
    }
  }

}
