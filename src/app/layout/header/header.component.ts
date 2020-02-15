import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

const enum LinksMenu {
  PORTFOLIO = 'Portfolio',
  ESTADISTICAS = 'Estadísticas'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly brand: string;
  readonly portfolio: string;
  readonly estadisticas: string;

  constructor(public srvAuth: AuthService) {
    this.brand = 'Javier Pozo C.';
    this.portfolio = LinksMenu.PORTFOLIO;
    this.estadisticas = LinksMenu.ESTADISTICAS;
   }

  ngOnInit() {
  }

  onLogout(): void {
    this.srvAuth.logout();
    sessionStorage.clear();
    console.log('Salir session >>>>>>>>>>>>>>>>>>>>>>>> ');
  }

}
