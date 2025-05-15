import { Component } from '@angular/core';
import { StempelService } from '../../services/stempel.service';

@Component({
  selector: 'app-stempeln',
  template: `
    <h2>Stempeln</h2>
    <button (click)="stempeln()">Stempeln</button>
    <p *ngIf="meldung">{{ meldung }}</p>
  `
})
export class StempelnComponent {
  meldung = '';
  userId = 1; // 🔁 Später dynamisch

  constructor(private stempelService: StempelService) {}

  stempeln() {
    this.stempelService.stempeln(this.userId).subscribe({
      next: () => this.meldung = 'Erfolgreich gestempelt!',
      error: (err) => this.meldung = 'Fehler: ' + err.message
    });
  }
}
