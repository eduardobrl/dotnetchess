import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() {
    this.columns = ["A", "B", "C", "D", "E", "F", "G", "H"]
    this.rows = ["1", "2", "3", "4", "5", "6", "7", "8"]

   }

  public rows : string[];
  public columns: string[];

  ngOnInit() {

  }

  public invert()
  {
    this.rows.reverse()
  }
  onDragover(event:DragEvent, obj) {
    var target = event.target || event.currentTarget;
    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event:DndDropEvent, obj) {
    console.log("dropped", JSON.stringify(event, null, 2));
  }

}
