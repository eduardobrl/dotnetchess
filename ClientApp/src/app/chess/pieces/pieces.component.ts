import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})
export class PiecesComponent implements OnInit {

  @Input() public piece: string;
  @Input() public white: boolean;

  constructor() {
    this.white = false
   }

  ngOnInit() {
  }

}
