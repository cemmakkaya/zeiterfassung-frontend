import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/stempeln">Stempeln</a> |
      <a routerLink="/history">History</a> |
      <a routerLink="/admin">Admin</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
