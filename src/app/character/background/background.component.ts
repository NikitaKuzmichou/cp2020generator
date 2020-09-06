import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BackgroundOptions } from './background.options';

import { DressComponent } from './dress/dress.component';
import { EthnicComponent } from './ethnic/ethnic.component';
import { EventsComponent } from './events/events.component';
import { FamilyComponent } from './family/family.component';
import { MotivationComponent } from './motivation/motivation.component';
import { EthnicLocalization } from '../../localization/character/background/ethnic/ethnic';
import { DressLocalization } from '../../localization/character/background/dress/dress';
import { MotivationLocalization } from '../../localization/character/background/motivations/motivation';
import { FamilyLocalization } from '../../localization/character/background/family/family';
import { EventsLocalization } from '../../localization/character/background/events/events';
import { ProblemsWinsEventsLocalization } from '../../localization/character/background/events/problems-and-wins/problems.wins.events';
import { RomanticEventsLocalization } from '../../localization/character/background/events/romantic/romantic.events';
import { NothingHappenedEventsLocalization } from '../../localization/character/background/events/nothing-happened/nothing.happened.events';
import { FriendsEnemiesEventsLocalization } from '../../localization/character/background/events/friends-and-enemies/friends.enemies.events';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  @Input() options: BackgroundOptions;
  @Input() ethnicLocalization: EthnicLocalization;
  @Input() dressLocalization: DressLocalization;
  @Input() motivationLocalization: MotivationLocalization;
  @Input() familyLocalization: FamilyLocalization;
  @Input() eventsLocalization: EventsLocalization;
  @Input() eventsRomanticLocalization: RomanticEventsLocalization;
  @Input() eventsProblAndWinsLocalization: ProblemsWinsEventsLocalization;
  @Input() eventsNothHappLocalization: NothingHappenedEventsLocalization;
  @Input() eventsFriendsEnemLocalization: FriendsEnemiesEventsLocalization;
  @ViewChild(DressComponent)
  private dress;
  @ViewChild(EthnicComponent)
  private ethnic;
  @ViewChild(EventsComponent)
  private events;
  @ViewChild(FamilyComponent)
  private family;
  @ViewChild(MotivationComponent)
  private motivation;
  isGenerated: boolean;

  /**TODO*/
  constructor() { }

  ngOnInit(): void {
    this.isGenerated = false;
  }

  onGenerate() {
    this.isGenerated = true;
    this.ethnic.onGenerate();
    this.dress.onGenerate();
    this.motivation.onGenerate();
    this.family.onGenerate();
    this.events.onGenerate();
  }
}
