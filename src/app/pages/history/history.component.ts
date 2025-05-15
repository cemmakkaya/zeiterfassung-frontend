import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  stempelHistory = [
    { start: '08:00', stop: '12:00', pause: '30 min', resumed: '12:30', end: '16:42' },
    { start: '09:10', stop: '12:15', pause: '45 min', resumed: '13:00', end: '17:00' },
    // weitere Testdaten ...
  ];
}
