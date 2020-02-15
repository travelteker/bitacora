import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from './material.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContainerAppComponent } from '../pages/container-app/container-app.component';
/* Fontawesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContainerAppComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }
