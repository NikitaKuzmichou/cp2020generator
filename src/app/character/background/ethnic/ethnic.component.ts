import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethnic',
  templateUrl: './ethnic.component.html',
  styleUrls: ['./ethnic.component.css']
})
export class EthnicComponent implements OnInit {
  @Input() selected: boolean;

  //localization: ;

  constructor() { }

  ngOnInit(): void {
  }

}
