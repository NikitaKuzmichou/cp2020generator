import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { CharacterLocalization } from '../localization/character/character';
import { GenerationOptions } from './generation.options';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  private showOptions = false;
  localization: CharacterLocalization;
  options: GenerationOptions;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.updateLocalization();
  }

  onShowOptions() {
    return this.showOptions;
  }

  changeOptionsState() {
    this.showOptions = !this.showOptions;
  }

  languageChanged() {
    return this.appService.getLanguage() !== this.localization.getLanguage();
  }

  updateLocalization() {
    this.localization = this.appService.getLocalization().getCharacterLocalization();
  }
}
