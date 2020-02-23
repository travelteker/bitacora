import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { CookiesPolicyService } from './cookies-policy.service';


const enum URL_EXTERNAL {
  GOOGLE = 'https://google.es',
}

const enum URL_BITACORA {
  HOME = '/home',
}


@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss']
})
export class CookiesPolicyComponent implements OnInit {

  private readonly keySessionPolicyCookies = 'BitacoraPC';

  constructor(
    private ckPolicySrv: CookiesPolicyService,
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) {
    sessionStorage.setItem(this.keySessionPolicyCookies, JSON.stringify({activated: 'yes', date: new Date()}));
  }

  ngOnInit() {
  }

  public closePolicyCookies(): void {
    // this.externalRedirection();
    this.updateSessionStorage(this.keySessionPolicyCookies);
    // Ocultar ventana política cookies
    this.ckPolicySrv.updatedStatusControlPolicyCookies(false);
  }

  /**
   * Actualizar key de sessionStorage ------------------> llevar lógica al servicio
   */
  private updateSessionStorage(key: string, newValue?: any): void {
    let beforeUpdateKeySession: any;
    let newKeyToAddSession: any;
    const sessionKey = sessionStorage.getItem(key);

    if (sessionKey) {
      beforeUpdateKeySession = JSON.parse(sessionStorage.getItem(key));
      newKeyToAddSession = {result: {accept: 'no', time: Date.now()}};
      sessionStorage.setItem(this.keySessionPolicyCookies, JSON.stringify({...beforeUpdateKeySession, ...newKeyToAddSession}));
    }
  }

  /**
   * Redireccionar a una URL externa al proyecto
   */
  private externalRedirection(): void {
    this.document.location.href = URL_EXTERNAL.GOOGLE;
  }

  /**
   * Mostrar componente con la Política de Cookies
   */
  public showPolicyCookies(): void {
    alert('En construcción .... próximamente disponible!!');
    // TODO ---> CREAR COMPONENTE PARA MOSTRAR CONTENIDO POLITICA DE COOKIES
  }

  /**
   * Mostrar la página de inicio site Bitacora
   */
  public initSite(): void {
    this.hideBannerPolicyCookies();
    // Guardar variable session Acepta Cookies
    sessionStorage.setItem('cookies', JSON.stringify({accept: true, time: Date.now()}));
  }

  /**
   * Hide banner Policy Cookies and access allow to the site Bitacora
   */
  private hideBannerPolicyCookies(): void {
    this.ckPolicySrv.updatedStatusControlPolicyCookies(false);
  }

  // TODO ---> crear servicio para comprobar si se mostró en la SESSION el aviso de COOKIES,
  // SINO fue así seguir mostrando en cada navegación

}
