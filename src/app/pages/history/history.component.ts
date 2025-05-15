import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-history',
  template: `
    <h2>📋 History</h2>
    <ul>
      <li>08.05.2025 - 08:00 - eingestempelt</li>
      <li>08.05.2025 - 16:30 - ausgestempelt</li>
    </ul>
  `
})
export class HistoryComponent {}
