import {Component, OnInit} from '@angular/core';

import {AppService} from './app.service';
import {AppLanguage} from './app.language';

import {NavLocalization} from './localization/nav/nav.localization';
import {NavLocalizationFactory} from './factories/localization/nav/localization.factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cyberpunk 2020 character generator';
  navLocal: NavLocalization;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.navLocal = NavLocalizationFactory.getLocalization(this.appService.getLanguage());
  }

  getEnglishLang() {
    return AppLanguage.ENGLISH;
  }

  getRuLang() {
    return AppLanguage.RUSSIAN;
  }

  setLocalization() {
    this.navLocal = NavLocalizationFactory.getLocalization(this.appService.getLanguage());
  }
}
