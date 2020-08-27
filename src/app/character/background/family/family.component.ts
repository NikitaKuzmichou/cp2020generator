import { Component, Input, OnInit } from '@angular/core';
import { FamilyService } from './family.service';
import { FamilyRolls } from './family.rolls';
import { FamilyLocalization } from '../../../localization/character/background/family/family';
import { SiblingRolls } from './sibling.rolls';

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
  isGenerated: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isGenerated = false;
    this.service = new FamilyService();
    this.rolls = null;
  }

  onGenerate() {
    if (this.selected) {
      this.isGenerated = true;
      this.rolls = this.service.generateRolls();
    } else {
      return false;
    }
  }

  getFamilyRanking() {
    return this.localization.getRankingByRoll(this.rolls.ranking);
  }

  getParents() {
    return this.localization.getParentsByRoll(this.rolls.parents);
  }

  getSomethingHapped() {
    return this.localization.getHappedEventByRoll(this.rolls.somethingHapped);
  }

  getStatus() {
    return this.localization.getStatusByRoll(this.rolls.status);
  }

  getChildEnv() {
    return this.localization.getChildEnvByRoll(this.rolls.childEnv);
  }

  getTragedy() {
    return this.localization.getTragedyByRoll(this.rolls.tragedy);
  }

  getNumSiblings() {
    return this.localization.getNumSiblingsByRoll(this.rolls.siblings.length);
  }

  getSiblingGender(num) {
    return this.localization.getSiblingGenderByRoll(this.rolls.siblings[num].gender);
  }

  getSiblingAge(num) {
    return this.localization.getSiblingGenderByRoll(this.rolls.siblings[num].age);
  }

  getSiblingFeelings(num) {
    return this.localization.getSiblingGenderByRoll(this.rolls.siblings[num].feelings);
  }
}
