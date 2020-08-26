import { Component, Input, OnInit } from '@angular/core';
import { FamilyService } from './family.service';
import { FamilyRolls } from './family.rolls';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  private service: FamilyService;
  private rolls: FamilyRolls;
  @Input() selected: boolean;
  //@Input() localization: FamilyLocalization;
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

}
