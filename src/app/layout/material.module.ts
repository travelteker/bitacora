import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Importar los Modulos de Angular Material necesarios */
import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

/* Creamos un array conteniendo dichas importaciones */
const myModulesAngularMaterial = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModulesAngularMaterial
  ],
  exports: [
    myModulesAngularMaterial
  ]
})
export class MaterialModule { }
