import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from '../pages/container-app/container-app.component';
import { Page404Component } from '../pages/page404/page404.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: '',
    component: ContainerAppComponent,
    children: [
      { path: 'home', loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('../pages/estadisticas/estadisticas.module').then(m => m.EstadisticasModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule) },
  { path: '**', component: Page404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
