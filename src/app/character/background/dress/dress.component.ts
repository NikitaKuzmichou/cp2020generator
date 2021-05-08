import { Component, Input, OnInit } from '@angular/core';

import { Dice } from '../../../service/dices/dice';
import { DiceD10 } from '../../../service/dices/dice.d10';
import { DressLocalization } from '../../../localization/character/background/dress/dress';
import {ButtonsLocalization} from '../../../localization/buttons/buttons';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  private roll: number;
  private d10: Dice;
  @Input() selected: boolean;
  @Input() localization: DressLocalization;
  @Input() btnLocalization: ButtonsLocalization;
  @Input() generateAfterCreation: boolean;
  @Input() hideHeaderAndBtn: boolean;
  isGenerated: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.d10 = new DiceD10();
    if (this.generateAfterCreation) {
      this.onGenerate();
    }
  }

  onGenerate() {
    if (this.selected) {
      this.roll = this.d10.roll();
      this.isGenerated = true;
    } else {
      return false;
    }
  }

  getClothes() {
    if (this.roll) {
      return this.localization.getClothesByRoll(this.roll);
    }
  }

  getHairstyle() {
    if (this.roll) {
      return this.localization.getHairstyleByRoll(this.roll);
    }
  }

  getAffectations() {
    if (this.roll) {
      return this.localization.getAffectationsByRoll(this.roll);
    }
  }
}
