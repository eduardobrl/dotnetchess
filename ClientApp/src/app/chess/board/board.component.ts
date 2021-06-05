import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { PhaseService, Phases } from 'src/app/phase.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private phaseService: PhaseService) {
    this.columns = ["A", "B", "C", "D", "E", "F", "G", "H"]
    this.rows = ["1", "2", "3", "4", "5", "6", "7", "8"]
    this.phase = phaseService.getPhase()

   }

  public rows : string[];
  public columns: string[];
  public target: EventTarget;
  public phase: Phases;

  ngOnInit() {

  }

  public invert()
  {
    this.rows.reverse()
  }
  onDragover(event:DragEvent) {
    this.target = event.target
  }

  onDrop(event:DndDropEvent) {
    const piece = event.data
    var idAttr = this.target.id;

    console.log(`dropped ${piece} on ${idAttr} `);
  }

}
