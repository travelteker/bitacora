import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { EstadisticasComponent } from './estadisticas.component';

import { MaterialModule } from '../../layout/material.module';

import { PresenterModule } from './presenter/presenter.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EstadisticasComponent],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    MaterialModule,
    PresenterModule,
    RouterModule
  ]
})
export class EstadisticasModule { }
