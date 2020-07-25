import { Injectable } from '@angular/core';
import { AppLanguage } from './app.language';
import { LocalizationResolver } from './factories/localization/localization.resolver';
import { LocalizationFactory } from './factories/localization/localization';

@Injectable({
    providedIn: 'root',
  })
export class AppService {

  language: AppLanguage;
  localizationFactory: LocalizationFactory;

  constructor() {}

  setLanguage(language: AppLanguage) {
    this.language = language;
    this.localizationFactory = LocalizationResolver.getLocalizationFactory(this.language);
  }

  getLanguage() {
    return this.language;
  }

  getLocalization() {
    return this.localizationFactory;
  }
}
