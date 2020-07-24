import { Injectable } from '@angular/core';
import { AppLanguage } from './app.language';

@Injectable({
    providedIn: 'root',
  })
export class AppService {

  language = AppLanguage.ENGLISH;

  constructor() { }

  setLanguage(language: AppLanguage) {
    this.language = language;
  }

  getLanguage() {
    return this.language;
  }
}
