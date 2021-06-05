import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessComponent } from './chess.component';
import { BoardComponent } from './board/board.component';
import { PiecesComponent } from './pieces/pieces.component';
import { RouterModule } from '@angular/router';
import { KnightComponent } from './pieces/knight/knight.component';
import { QueenComponent } from './pieces/queen/queen.component';
import { PawnComponent } from './pieces/pawn/pawn.component';
import { BishopComponent } from './pieces/bishop/bishop.component';
import { KingComponent } from './pieces/king/king.component';
import { RookComponent } from './pieces/rook/rook.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndModule } from 'ngx-drag-drop';


@NgModule({
  declarations: [ChessComponent, BoardComponent, PiecesComponent, KnightComponent, QueenComponent, PawnComponent, BishopComponent, KingComponent, RookComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'chess', component: ChessComponent},

    ]),
    DndModule
  ],
  exports: [
    RouterModule
  ]
})
export class ChessModule { }
