import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  template: `
    <button mat-fab color="primary" (click)="toggleLogin()" class="auth-fab">
      <mat-icon>login</mat-icon>
    </button>
  `,
  styles: [`
    .auth-fab {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
    }
  `]
})
export class AuthButtonComponent {
  toggleLogin() {
    alert('✅ Button funktioniert!');
  }
}
