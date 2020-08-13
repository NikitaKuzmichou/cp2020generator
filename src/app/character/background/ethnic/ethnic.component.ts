import { Component, Input, OnInit } from '@angular/core';

import { EthnicLocalization } from '../../../localization/character/background/ethnic/ethnic';
import { EthnicService } from './ethnic.service';
import { Dice } from '../../../service/dices/dice';
import { DiceD10 } from '../../../service/dices/dice.d10';

@Component({
  selector: 'app-ethnic',
  templateUrl: './ethnic.component.html',
  styleUrls: ['./ethnic.component.css']
})
export class EthnicComponent implements OnInit {
  private roll: number;
  private d10: Dice;
  private service: EthnicService;
  @Input() selected: boolean;
  @Input() localization: EthnicLocalization;
  isGenerated: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isGenerated = false;
    this.d10 = new DiceD10();
    this.roll = null;
    this.service = new EthnicService();
  }

  onGenerate() {
    if (this.selected) {
      this.roll = this.d10.roll();
      this.isGenerated = true;
    } else {
      return false;
    }
  }

  /**TODO*/
  getEthnicOrigin() {
    if (this.roll) {
      return this.service.getEthnicOrigin(this.roll, this.localization)[0];
    }
  }

  getEthnicLanguages() {
    if (this.roll) {
      return this.service.getEthnicOrigin(this.roll, this.localization)[1];
    }
  }
}
