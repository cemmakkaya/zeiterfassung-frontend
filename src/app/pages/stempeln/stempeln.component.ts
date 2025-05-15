import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-stempeln',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './stempeln.component.html',
  styleUrls: ['./stempeln.component.css'],
  
})
export class StempelnComponent {
  zeiten: (string | null)[] = [null, null, null, null];
  stempelIndex = 0;

  stempeln() {
    if (this.stempelIndex < 4) {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.zeiten[this.stempelIndex] = time;
      this.stempelIndex++;
    }
  }

  get pause(): string {
    if (this.zeiten[1] && this.zeiten[2]) {
      const [h1, m1] = this.zeiten[1].split(':').map(Number);
      const [h2, m2] = this.zeiten[2].split(':').map(Number);
      const diff = (h2 * 60 + m2) - (h1 * 60 + m1);
      return `${Math.floor(diff / 60)}h ${diff % 60}min`;
    }
    return '–';
  }
}
