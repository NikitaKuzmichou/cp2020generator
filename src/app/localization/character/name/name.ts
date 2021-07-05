import { Localization } from '../../localization';

export interface NameLocalization extends Localization {
  getNameHeader();
  getNameOption(option: string);
}
