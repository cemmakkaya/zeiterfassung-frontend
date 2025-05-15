import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'stempeln', component: StempelnComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'admin', component: AdminComponent },
];
