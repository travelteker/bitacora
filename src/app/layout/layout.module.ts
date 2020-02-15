import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from './material.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContainerAppComponent } from '../pages/container-app/container-app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContainerAppComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }
