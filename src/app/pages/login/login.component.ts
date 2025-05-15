import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <label>Benutzername:
        <input [(ngModel)]="username" name="username" required />
      </label>
      <br />
      <label>Passwort:
        <input [(ngModel)]="password" name="password" type="password" required />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Bitte alle Felder ausfüllen!');
    }
  }
}
