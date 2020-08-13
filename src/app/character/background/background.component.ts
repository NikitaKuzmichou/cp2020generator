import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { BackgroundOptions } from './background.options';

import { DressComponent } from './dress/dress.component';
import { EthnicComponent } from './ethnic/ethnic.component';
import { EventsComponent } from './events/events.component';
import { FamilyComponent } from './family/family.component';
import { MotivationComponent } from './motivation/motivation.component';
import { EthnicLocalization } from '../../localization/character/background/ethnic/ethnic';
import { DressLocalization } from '../../localization/character/background/dress/dress';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  @Input() options: BackgroundOptions;
  //@Input() bgLocalization: BackgroundLocalization;
  @Input() ethnicLocalization: EthnicLocalization;
  @Input() dressLocalization: DressLocalization;
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
  }
}
