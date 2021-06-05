import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private phase : Phases;

  constructor() {
    this.phase = 'placement'
   }

   getPhase() {
     return this.phase;
   }

}

export type Phases = 'placement' | 'play'
