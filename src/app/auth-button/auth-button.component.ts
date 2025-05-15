import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {
  loggedIn = false;

  toggleLogin() {
    if (this.loggedIn) {
      this.loggedIn = false;
      console.log('🚪 Ausgeloggt');
    } else {
      console.log('🔐 Weiterleitung zur Login-Seite');
      window.location.href = '/login'; 
    }
  }
}
