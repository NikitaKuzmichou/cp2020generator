import { Component, Input, OnInit } from '@angular/core';
import { Dice } from '../../../service/dices/dice';
import { DiceD10 } from '../../../service/dices/dice.d10';
import { MotivationLocalization } from '../../../localization/character/background/motivations/motivation';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {
  private roll: number;
  private d10: Dice;
  @Input() selected: boolean;
  @Input() localization: MotivationLocalization;
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

  getPersonTraits() {
    if (this.roll) {
      return this.localization.getPersonTraitByRoll(this.roll);
    }
  }

  getPersonValue() {
    if (this.roll) {
      return this.localization.getValuePersonByRoll(this.roll);
    }
  }

  getValueMost() {
    if (this.roll) {
      return this.localization.getValueMostByRoll(this.roll);
    }
  }

  getFeelAboutPeople() {
    if (this.roll) {
      return this.localization.getFeelAboutPeopleByRoll(this.roll);
    }
  }

  getValuePossession() {
    if (this.roll) {
      return this.localization.getValuedPossessionByRoll(this.roll);
    }
  }

}
