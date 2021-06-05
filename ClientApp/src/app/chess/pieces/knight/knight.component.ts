import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})
export class KnightComponent implements OnInit {

  @Input() public white: boolean;

  constructor() {
    this.white = false
   }

  ngOnInit() {
  }

}
