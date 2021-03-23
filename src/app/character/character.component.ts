import { Component, OnInit, ViewChild} from '@angular/core';
import { interval } from 'rxjs';

import { AppService } from '../app.service';
import { CharacterLocalization } from '../localization/character/character';
import { GenerationOptions } from './options/generation.options';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { BackgroundComponent } from './background/background.component';
import { ButtonsLocalization } from '../localization/buttons/buttons';
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @ViewChild(CharacteristicsComponent)
  private characteristics: CharacteristicsComponent;
  @ViewChild(BackgroundComponent)
  private background: BackgroundComponent;
  localization: CharacterLocalization;
  btnLocalization: ButtonsLocalization;
  showOptions: boolean;
  options: GenerationOptions;

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.updateLocalization();
    this.options = new GenerationOptions();
    this.showOptions = true;
  }

  updateLocalization() {
    this.localization = this.appService.getLocalization().getCharacterLocalization();
    this.btnLocalization = this.appService.getLocalization().getButtonsLocalization();
  }

  onShowOptions() {
    return this.showOptions;
  }

  changeOptionsState() {
    this.showOptions = !this.showOptions;
  }

  generateInfo() {
    if (this.options.backgroundOptions.events.age < 16) {
      this.options.backgroundOptions.events.age = 16;
    } else if (this.options.backgroundOptions.events.age > 74) {
      this.options.backgroundOptions.events.age = 74;
    }
    this.characteristics.onGenerate();
    this.background.onGenerate();
  }

  isLanguageChanged() {
    return this.appService.getLanguage() !== this.localization.getLanguage();
  }
}
