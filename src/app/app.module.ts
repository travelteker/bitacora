import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';

/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

/* login */
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Page404Component } from './pages/page404/page404.component';
import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    CookiesPolicyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,  // Requerido para caracterisitcas de BD
    AngularFireStorageModule, // Requerido para las funciones de almacenamiento
    AngularFireAuthModule,    // Requerido para login
  ],
  providers: [
    {
      provide: StorageBucket,
      useValue: `gs://${environment.firebaseConfig.storageBucket}`
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
