import { Component, Input, OnInit } from '@angular/core';
import { FamilyService } from './service/family.service';
import { FamilyRolls } from './service/family.rolls';
import { FamilyLocalization } from '../../../localization/character/background/family/family';
import { ButtonsLocalization } from '../../../localization/buttons/buttons';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  private service: FamilyService;
  private rolls: FamilyRolls;
  @Input() selected: boolean;
  @Input() localization: FamilyLocalization;
  @Input() btnLocalization: ButtonsLocalization;
  isGenerated: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isGenerated = false;
    this.service = new FamilyService();
    this.rolls = null;
  }

  onGenerate() {
    if (this.selected) {
      this.rolls = this.service.generateRolls();
      this.isGenerated = true;
    } else {
      return false;
    }
  }

  getFamilyRanking() {
    if (this.rolls) {
      return this.localization.getRankingByRoll(this.rolls.ranking);
    }
  }

  getParents() {
    if (this.rolls) {
      return this.localization.getParentsByRoll(this.rolls.parents);
    }
  }

  isSomethingHapped() {
    if (this.rolls) {
      return this.rolls.somethingHappened > 6;
    }
  }

  getSomethingHapped() {
    if (this.rolls) {
      return this.localization.getHappedEventByRoll(this.rolls.somethingHappened);
    }
  }

  getStatus() {
    if (this.rolls) {
      return this.localization.getStatusByRoll(this.rolls.status);
    }
  }

  getChildEnv() {
    if (this.rolls) {
      return this.localization.getChildEnvByRoll(this.rolls.childEnv);
    }
  }

  isTragedyEvent() {
    if (this.rolls) {
      return this.rolls.tragedy < 7;
    }
  }

  getTragedy() {
    if (this.rolls) {
      return this.localization.getTragedyByRoll(this.rolls.tragedy);
    }
  }

  getSiblings() {
    if (this.rolls) {
      return this.rolls.siblings;
    }
  }

  getNumSiblings() {
    if (this.rolls) {
      return this.localization.getNumSiblingsByRoll(this.rolls.siblings.length);
    }
  }

  getSiblingGender(num) {
    if (this.rolls) {
      return this.localization.getSiblingGenderByRoll(this.rolls.siblings[num].gender);
    }
  }

  getSiblingAge(num) {
    if (this.rolls) {
      return this.localization.getSiblingAgeByRoll(this.rolls.siblings[num].age);
    }
  }

  getSiblingFeelings(num) {
    if (this.rolls) {
      return this.localization.getSiblingFeelingsByRoll(this.rolls.siblings[num].feelings);
    }
  }
}
