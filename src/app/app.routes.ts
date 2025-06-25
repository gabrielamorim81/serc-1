import { Routes } from '@angular/router';
import {Dashboard} from './components/pages/dashboard/dashboard';
import {authGuard} from './services/authguard';
import {Loginpage} from './components/pages/loginpage/loginpage';
import {Composicoes} from './components/pages/composicoes/composicoes';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path: 'composicoes',
    component: Composicoes,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: Loginpage
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
