import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliasRoutingModule } from './familias-routing.module';
import { FamiliasComponent } from './familias.component';


@NgModule({
  declarations: [FamiliasComponent],
  imports: [
    CommonModule,
    FamiliasRoutingModule
  ]
})
export class FamiliasModule { }
