import { Characteristics } from './characteristics';
import { CharacteristicsService } from './characteristics.service';

export class CharacteristicsGenerator {
  private service: CharacteristicsService;

  constructor() {
    this.service = new CharacteristicsService();
  }

  generateCharacteristics(): Characteristics {
    let characteristics = new Characteristics();
    characteristics.attr = this.service.generateCharacteristic();
    characteristics.body = this.service.generateCharacteristic();
    characteristics.tech = this.service.generateCharacteristic();
    characteristics.ref = this.service.generateCharacteristic();
    characteristics.ma = this.service.generateCharacteristic();
    characteristics.luck = this.service.generateCharacteristic();
    characteristics.int = this.service.generateCharacteristic();
    characteristics.emp = this.service.generateCharacteristic();
    characteristics.cool = this.service.generateCharacteristic();
    characteristics.btm = this.service.getBtm(characteristics.body);
    characteristics.carry = this.service.getCarry(characteristics.body);
    characteristics.lift = this.service.getLift(characteristics.body);
    characteristics.run = this.service.getRun(characteristics.ma);
    characteristics.leap = this.service.getLeap(characteristics.run);
    characteristics.humanity = this.service.getHumanity(characteristics.emp);
    return characteristics;
  }
}
