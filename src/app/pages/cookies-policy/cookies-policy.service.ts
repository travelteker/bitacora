import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CookiesPolicyService {

  private statusControlPolicyCookies: BehaviorSubject<boolean>;

  constructor() {
    this.statusControlPolicyCookies = new BehaviorSubject<boolean>(true);
  }

  /**
   * Actualizar statusControlPolicyCookies a un nuevo valor
   * @param status Valor con el que queremos actualizar
   */
  public updatedStatusControlPolicyCookies(status: boolean) {
    this.statusControlPolicyCookies.next(status);
  }

  /**
   * Obtener el observable de nuestro statusControlPolicyCookies
   */
  public getStatusControlPolicyCookies(): Observable<boolean> {
    return this.statusControlPolicyCookies.asObservable();
  }
}
