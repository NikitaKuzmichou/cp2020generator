import { Component, Input, OnInit } from '@angular/core';
import { CharacteristicsService } from './characteristics.service';
import { CharacteristicsOptions } from './characteristics.options';
import { Characteristics } from './characteristics';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {
  private service: CharacteristicsService;
  @Input() options: CharacteristicsOptions;
  characteristics: Characteristics;
  //localization: ;

  /**TODO*/
  constructor() { }

  ngOnInit(): void {
    this.characteristics = new Characteristics();
    this.service = new CharacteristicsService();
  }

  onGenerate() {
    if (this.options.selected) {
      this.generateCharacteristics();
    } else {
      return false;
    }
  }

  private generateCharacteristics() {
    this.characteristics.attr = this.service.generateCharacteristic();
    this.characteristics.body = this.service.generateCharacteristic();
    this.characteristics.tech = this.service.generateCharacteristic();
    this.characteristics.ref = this.service.generateCharacteristic();
    this.characteristics.ma = this.service.generateCharacteristic();
    this.characteristics.luck = this.service.generateCharacteristic();
    this.characteristics.int = this.service.generateCharacteristic();
    this.characteristics.emp = this.service.generateCharacteristic();
    this.characteristics.cool = this.service.generateCharacteristic();
    this.characteristics.btm = this.service.getBtm(this.characteristics.body);
    this.characteristics.carry = this.service.getCarry(this.characteristics.body);
    this.characteristics.run = this.service.getRun(this.characteristics.ma);
    this.characteristics.leap = this.service.getLeap(this.characteristics.run);
    this.characteristics.humanity = this.service.getHumanity(this.characteristics.emp);
  }
}
