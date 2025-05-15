import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { StempelnComponent } from './pages/stempeln/stempeln.component';
import { HistoryComponent } from './pages/history/history.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'stempeln', component: StempelnComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'admin', component: AdminComponent },
];
