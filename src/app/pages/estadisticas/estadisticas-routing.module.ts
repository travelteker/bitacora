import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasComponent } from './estadisticas.component';
import { PresenterComponent } from './presenter/presenter.component';

const routes: Routes = [
  { path: '',
  component: EstadisticasComponent,
  children: [
    { path: '', redirectTo:'presenter', pathMatch: 'full' },
    { path: 'presenter', component: PresenterComponent },
    { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule) },
    { path: 'familias', loadChildren: () => import('./familias/familias.module').then(m => m.FamiliasModule) }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticasRoutingModule { }
