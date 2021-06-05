import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bishop',
  templateUrl: './bishop.component.html',
  styleUrls: ['./bishop.component.css']
})
export class BishopComponent implements OnInit {

  @Input() public white: boolean;
  public count: number;
  public moves: object;

  constructor() {
    this.white = false
    this.count = 2;
    this.moves = { }

   }

  canMoveTo() {}

  ngOnInit() {
  }

}
