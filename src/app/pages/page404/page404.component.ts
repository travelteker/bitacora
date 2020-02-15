import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  /**
   * Ruta a la que vamos a redireccionar
   */
  public link: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.link = '/home';
    if (this.router.url.match(/estadisticas/gi)) {
      this.link = '/estadisticas';
    }
  }

}
