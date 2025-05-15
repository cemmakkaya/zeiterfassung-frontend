import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { AuthButtonComponent } from './auth-button/auth-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,
    NgIf,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    AuthButtonComponent,
    MatDividerModule
  ]
})
export class AppComponent {
  constructor(private router: Router) {}

  showNavigation(): boolean {
    return this.router.url === '/home';
  }
  
  private platformId = inject(PLATFORM_ID);

  isHandset(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth < 768;
    }
    return false; 
  }
}
