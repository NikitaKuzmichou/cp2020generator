import {Component, Input, OnInit} from '@angular/core';
import {ButtonsLocalization} from '../../localization/buttons/buttons';
import {NameOptions} from '../options/name.options';
import {NameLocalization} from '../../localization/character/name/name';
import {HttpClient} from "@angular/common/http";
import {NameRequestService} from "./name.request.service";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  private nameService: NameRequestService;
  @Input() options: NameOptions;
  @Input() localization: NameLocalization;
  @Input() btnLocalization: ButtonsLocalization;
  isGenerated: boolean;
  name: string;

  constructor(private httpClient: HttpClient) {
    this.nameService = new NameRequestService(httpClient);
  }

  ngOnInit(): void {}

  onGenerate() {
    if (this.options.selected) {
      this.isGenerated = true;
      this.nameService.getName(this.options.nameType)
        .subscribe(response => this.name = response);
    } else {
      return false;
    }
  }

}
