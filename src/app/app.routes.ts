import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Projetos } from './pages/projetos/projetos'
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  {path: '', component:Home, pathMatch:'full'},
  {path: 'sobre', component:Sobre},
  {path: 'projetos', component:Projetos},
  {path: 'contato', component: Contato},
  {path: '**', redirectTo:'', pathMatch:'prefix'}
];
