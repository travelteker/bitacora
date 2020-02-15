import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  public opened = false;

  constructor(
    private authSrv: AuthService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public onLogout(): void {
    this.authSrv.logout();
    sessionStorage.clear();
    this.route.navigate(['/home']);
  }

}
