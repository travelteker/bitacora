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
    this.ckPolicySrv.updatedStatusControlPolicyCookies(false);
    this.updateSessionStorage(this.keySessionPolicyCookies);
  }

  /**
   * Actualizar key de sessionStorage
   */
  private updateSessionStorage(key: string): void {
    const beforeUpdateKeySession = JSON.parse(sessionStorage.getItem(key));
    const newKeyToAddSession = {result: {accept: 'no'}};

    // Ocultar banner Cookies Policy
    sessionStorage.setItem(this.keySessionPolicyCookies, JSON.stringify({...beforeUpdateKeySession, ...newKeyToAddSession}));
  }

  /**
   * Redireccionar a una URL externa al proyecto
   */
  private externalRedirection(): void {
    this.document.location.href = URL_EXTERNAL.GOOGLE;
  }

  /**
   * Hide banner Policy Cookies and access allow to the site Bitacora
   */
  private hideBannerPolicyCookies(): void {
    this.ckPolicySrv.updatedStatusControlPolicyCookies(false);
  }

  /**
   * Mostrar componente con la Política de Cookies
   */
  public showPolicyCookies(): void {
    alert('En construcción .... próximamente disponible!!');
  }

  /**
   * Mostrar la página de inicio site Bitacora
   */
  public initSite(): void {
    this.hideBannerPolicyCookies();
    this.router.navigate([URL_BITACORA.HOME]);
  }

}
