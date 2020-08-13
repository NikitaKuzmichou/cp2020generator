import { Component, Input, OnInit } from '@angular/core';
import { Dice } from '../../../service/dices/dice';
import { DiceD10 } from '../../../service/dices/dice.d10';
import { DressService } from './dress.service';
import { DressLocalization } from '../../../localization/character/background/dress/dress';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  private roll: number;
  private d10: Dice;
  private service: DressService;
  @Input() selected: boolean;
  @Input() localization: DressLocalization;
  isGenerated: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isGenerated = false;
    this.d10 = new DiceD10();
    this.roll = null;
    this.service = new DressService();
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
      this.service.getClothes(this.roll, this.localization);
    }
  }

  getHairstyle() {
    if (this.roll) {
      this.service.getHairstyle(this.roll, this.localization);
    }
  }

  getAffectations() {
    if (this.roll){
      this.service.getAffectations(this.roll, this.localization);
    }
  }
}
