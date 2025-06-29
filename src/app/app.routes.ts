import { Routes } from '@angular/router';
import {Dashboard} from './components/pages/dashboard/dashboard';
import {authGuard} from './services/authguard';
import {Loginpage} from './components/pages/loginpage/loginpage';
import {Composicoes} from './components/pages/composicoes/composicoes';
import {TopbarOrcamentos} from './components/topbar-orcamentos/topbar-orcamentos';
import {Insumos} from './components/pages/insumos/insumos';
import {CreateInsumo} from './components/pages/create-insumo/create-insumo';
import {Createcomp} from './components/pages/createcomp/createcomp';
import {Searchcompo} from './components/pages/searchcompo/searchcompo';
import {Searchinsumos} from './components/pages/searchinsumos/searchinsumos';

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
  },

  {
    path: 'insumos',
    component: Insumos,
    canActivate: [authGuard]
  },
{
    path: 'create-insumo',
    component: CreateInsumo,
    canActivate: [authGuard]
  },

  { path: 'orcamento',
    component: TopbarOrcamentos,
    canActivate: [authGuard]
  },

  { path: 'create-comp',
    component: Createcomp,
    canActivate: [authGuard]
  },


  { path: 'searchcomp',
    component: Searchcompo,
    canActivate: [authGuard]
  },


  { path: 'searchinsumos',
    component: Searchinsumos,
    canActivate: [authGuard]
  },


];

