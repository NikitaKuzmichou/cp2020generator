import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { CharacterLocalization } from '../localization/character/character';
import { CharacterLocalizationFactory } from '../factories/localization/character/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  private showOptions = false;
  localization: CharacterLocalization;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.changeLocalization();
  }

  isShowOptions() {
    return this.showOptions;
  }

  changeOptionsState() {
    this.showOptions = !this.showOptions;
  }

  changeLocalization() {
    this.localization = CharacterLocalizationFactory.getLocalization(this.appService.getLanguage());
  }
}
