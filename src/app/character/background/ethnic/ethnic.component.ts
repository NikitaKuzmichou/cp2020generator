import { Component, Input, OnInit } from '@angular/core';

import { EthnicLocalization } from '../../../localization/character/background/ethnic/ethnic';
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
  @Input() selected: boolean;
  @Input() localization: EthnicLocalization;
  isGenerated: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isGenerated = false;
    this.d10 = new DiceD10();
    this.roll = null;
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
      return this.getRolledEthnic()[0];
    }
  }

  getEthnicLanguages() {
    if (this.roll) {
      return this.getRolledEthnic()[1];
    }
  }

  private getRolledEthnic() {
    switch (this.roll) {
      case 1:
        return this.localization.getAngloAmerican();
      case 2:
        return this.localization.getAfrican();
      case 3:
        return this.localization.getKorean();
      case 4:
        return this.localization.getSoviet();
      case 5:
        return this.localization.getPacificIslander();
      case 6:
        return this.localization.getChinese();
      case 7:
        return this.localization.getBlackAmerican();
      case 8:
        return this.localization.getHispanicAmerican();
      case 9:
        return this.localization.getSouthAmerican();
      case 10:
        return this.localization.getEuropean();
      default:
        return null;
    }
  }
}
