import { Injectable } from '@angular/core';
import { AppLanguage } from './app.language';

@Injectable()
export class AppService {

  constructor(private language: AppLanguage) {
  }

  setLanguage(language: AppLanguage) {
    this.language = language;
  }

  getLanguage() {
    return this.language;
  }
}
