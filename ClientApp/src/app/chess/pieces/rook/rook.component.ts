import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rook',
  templateUrl: './rook.component.html',
  styleUrls: ['./rook.component.css']
})
export class RookComponent implements OnInit {

  @Input() public white: boolean;

  constructor() {
    this.white = false
   }

  ngOnInit() {
  }

}
