import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { faAngular, IconDefinition } from '@fortawesome/free-brands-svg-icons';

const enum LinksMenu {
  PORTFOLIO = 'Portfolio'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly logoAngular: IconDefinition = faAngular;
  readonly brand: string;
  readonly portfolio: string;
  readonly version: string;

  constructor(public srvAuth: AuthService) {
    this.brand = 'Bitácora';
    this.version = 'v1.0';
    this.portfolio = LinksMenu.PORTFOLIO;
   }

  ngOnInit() {
  }

}
