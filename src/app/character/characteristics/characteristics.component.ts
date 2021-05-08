import { Component, Input, OnInit } from '@angular/core';
import { Characteristics } from './service/characteristics';
import { CharacteristicsOptions } from '../options/characteristics.options';
import { CharacteristicsGenerator } from './service/characteristics.generator';
import { CharacteristicsLocalization } from '../../localization/character/characteristics/characteristics';
import { ButtonsLocalization } from '../../localization/buttons/buttons';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {
  private generator: CharacteristicsGenerator;
  @Input() options: CharacteristicsOptions;
  @Input() localization: CharacteristicsLocalization;
  @Input() btnLocalization: ButtonsLocalization;
  characteristics: Characteristics;
  isGenerated: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.generator = new CharacteristicsGenerator();
    this.characteristics = new Characteristics();
  }

  onGenerate() {
    if (this.options.selected) {
      this.isGenerated = true;
      this.characteristics = this.generator.generateCharacteristics();
    } else {
      return false;
    }
  }
}
